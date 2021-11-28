import { Project, SourceFile } from 'ts-morph'
import path from 'path'
import { outDir, projectRoot, titansDir } from './utils/paths'
import { sync } from 'fast-glob'
import fs from 'fs/promises'
import { pathRewriter, run, withTaskName } from './utils'
import { parallel } from 'gulp'

export async function allComponentsEntryTypes() {
  const project = new Project({
    tsConfigFilePath: path.resolve(projectRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
    compilerOptions: {
      declaration: true,
      allowJs: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir: path.resolve(outDir, 'allComponentsEntryTypes'),
      baseUrl: projectRoot,
      paths: {
        '@titans-ui/*': ['packages/*']
      },
      skipLibCheck: true,
      strict: false
    }
  })

  const projectFilePaths = sync('**/*.ts', {
    cwd: titansDir,
    onlyFiles: true,
    absolute: true
  })

  const sourceFiles: SourceFile[] = []

  await Promise.all(
    projectFilePaths.map(async (file) => {
      const sourceFile = project.addSourceFileAtPath(file)
      sourceFiles.push(sourceFile)
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

export const copyEntryTypes = () => {
  const src = path.resolve(outDir, 'allComponentsEntryTypes', 'titans-ui')
  const copy = (module) => {
    let output = path.resolve(outDir, module)
    return withTaskName(`allComponents:copyEntryTypes(${module})`, () =>
      run(`cp -r ${src}/* ${output}/`)
    )
  }
  return parallel(copy('es'), copy('lib'))
}
