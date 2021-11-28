import { rollup, OutputOptions, ModuleFormat } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import path from 'path'
import { componentsDir, distRoot, distTitans, projectRoot } from './utils/paths'
import { parallel, series } from 'gulp'
import { sync } from 'fast-glob'
import { buildConfig } from './utils/config'
import { Project, SourceFile } from 'ts-morph'
import fs from 'fs/promises'
import { pathRewriter, run, withTaskName } from './utils'
import * as vueCompiler from '@vue/compiler-sfc'

/**
 * 1. 打包每个组件 components 中的每个文件夹
 * 2. 打包组件入口文件：components/index.ts
 * 3. 给components中的所有文件生成ts的声明文件到types/components中，
 *    然后将生成的.d.ts文件分别拷贝到 dist/es/components 和 dist/lib/components中
 * 4. 删除步骤3中生成的 types 文件夹
 */
/**
 * 对于在组件中引用utils中的工具方法时：如 import *** from '@titans-ui/utils/index.ts'
 * 在构建过程中有两个关键点：
 * 1. 因为utils已经编译过，此处不需要打包进来，故在rollup打包时需要排除 @titans-ui/utils 中的代码
 * 2. 在打包后如果代码中依然是 import *** from '@titans-ui/utils/index.ts' 的话，
 * '@titans-ui/utils/index.ts' 此路径会不存在，所以需要重写路径，把 import *** from '@titans-ui/utils/index.ts'
 * 修改为 import *** from 'titans-ui/[es|lib]/utils/index.ts' 这样才不会出现路径不存在的问题。
 */

/* 打包每个组件 components 中的每个文件夹 */
const buildEachComponent = async () => {
  const dirs = sync('*', {
    cwd: componentsDir,
    onlyDirectories: true
  })

  const tasks = dirs.map(async (dir) => {
    const input = path.resolve(componentsDir, dir, 'index.ts')
    const inputOptions = {
      input,
      plugins: [
        vue({
          target: 'browser'
        }),
        nodeResolve(),
        commonjs(),
        typescript()
      ],
      external(id) {
        return /^vue/.test(id) || /^@titans-ui/.test(id)
      }
    }
    const bundle = await rollup(inputOptions)

    const eachComponentTasks = Object.values(buildConfig).map((config) => {
      const outputOptions: OutputOptions = {
        format: config.format as ModuleFormat,
        file: path.resolve(config.output.path, `components/${dir}/index.js`),
        paths: pathRewriter(config.output.name),
        exports: 'named'
      }
      return bundle.write(outputOptions)
    })
    return Promise.all(eachComponentTasks)
  })
  return Promise.all(tasks)
}

/* 生成ts的声明文件 */
async function genTypes() {
  const project = new Project({
    tsConfigFilePath: path.resolve(projectRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
    compilerOptions: {
      declaration: true,
      allowJs: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir: path.resolve(distRoot, 'types'),
      baseUrl: projectRoot,
      paths: {
        '@titans-ui/*': ['packages/*']
      },
      skipLibCheck: true,
      strict: false
    }
  })
  const projectFilePaths = sync('**/*', {
    cwd: componentsDir,
    onlyFiles: true,
    absolute: true
  })
  const sourceFiles: SourceFile[] = []
  await Promise.all(
    projectFilePaths.map(async (file) => {
      if (file.endsWith('.vue')) {
        const content = await fs.readFile(file, 'utf-8')
        const sfc = vueCompiler.parse(content)
        const { script } = sfc.descriptor
        if (script?.lang === 'ts') {
          let content = script.content
          const sourceFile = project.createSourceFile(`${file}.ts`, content)
          sourceFiles.push(sourceFile)
        }
      } else if (file.endsWith('.ts')) {
        const sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    })
  )

  await project.emit({
    emitOnlyDtsFiles: true
  })

  const sourceFileTasks = sourceFiles.map(async (sourceFile: SourceFile) => {
    const emitOutput = sourceFile.getEmitOutput()
    const outputFileTasks = emitOutput
      .getOutputFiles()
      .map(async (outputFile) => {
        const filepath = outputFile.getFilePath()
        await fs.mkdir(path.dirname(filepath), {
          recursive: true
        })
        const outputFileText = outputFile.getText()
        await fs.writeFile(filepath, pathRewriter('es')(outputFileText))
      })
    await Promise.all(outputFileTasks)
  })
  await Promise.all(sourceFileTasks)
}

function copyTypes() {
  const src = path.resolve(distRoot, 'types/components/')
  const copy = (module) => {
    let output = path.resolve(distTitans, module, 'components')
    return withTaskName(`eachComponent:copyTypes(${module})`, () =>
      run(`cp -r ${src}/* ${output}`)
    )
  }
  return parallel(copy('es'), copy('lib'))
}

async function buildComponentEntry() {
  const inputOptions = {
    input: path.resolve(componentsDir, 'index.ts'),
    plugins: [typescript()],
    external(id): boolean {
      return true
    }
  }
  const bundle = await rollup(inputOptions)
  return Promise.all(
    Object.values(buildConfig).map((config) => {
      const outputOptions: OutputOptions = {
        format: config.format as ModuleFormat,
        file: path.resolve(config.output.path, `components/index.js`)
      }
      return bundle.write(outputOptions)
    })
  )
}

export const eachComponent = series(
  withTaskName('eachComponent:buildEachComponent', buildEachComponent),
  withTaskName('eachComponent:buildComponentEntry', buildComponentEntry),
  withTaskName('eachComponent:genTypes', genTypes),
  copyTypes(),
  withTaskName('eachComponent:clean(types)', () => run('rm -rf dist/types'))
)
