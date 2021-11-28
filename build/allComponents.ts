import { rollup, OutputOptions, ModuleFormat } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import path from 'path'
import { titansDir, titansDist } from './utils/paths'
import { parallel, series } from 'gulp'
import { buildConfig } from './utils/config'
import { sync } from 'fast-glob'
import { run, withTaskName } from './utils'
import {
  allComponentsEntryTypes as entryTypes,
  copyEntryTypes
} from './allComponentsEntryTypes'

const pathRewriter = (id: string) => {
  return id.replace(/@titans-ui/g, '.')
}
/**
 * 1. 打包所有组件，不需要生成 .d.ts
 * 2. 将packages/titans-ui/index.ts编译到 dist/[es|lib]/index.js
 * 3. 生成 dist/[es|lib]/index.js 的声明文件 index.d.ts
 */
const plugins = [
  vue({
    target: 'browser'
  }),
  nodeResolve(),
  commonjs(),
  typescript()
]
async function buildAllComponents() {
  const inputOptions = {
    input: path.resolve(titansDir, 'index.ts'),
    plugins,
    external(id) {
      return /^vue/.test(id)
    }
  }
  const outputOptions: OutputOptions[] = [
    {
      format: 'umd',
      file: path.resolve(titansDist, 'index.js'),
      name: 'TitansUI',
      exports: 'named',
      globals: {
        vue: 'Vue'
      }
    },
    {
      format: 'esm',
      file: path.resolve(titansDist, 'index.esm.js')
    }
  ]
  // create a bundle
  const bundle = await rollup(inputOptions)

  return Promise.all(outputOptions.map((option) => bundle.write(option)))
}

async function allComponentsEntry() {
  const entryFiles = sync('**/*.ts', {
    cwd: titansDir,
    onlyFiles: true,
    absolute: true
  }).map((filepath) => path.resolve(filepath))

  const inputOptions = {
    input: entryFiles,
    plugins,
    external(id): boolean {
      /* fix: Error: Entry module cannot be external */
      return !entryFiles.includes(id)
    }
  }
  const bundle = await rollup(inputOptions)
  return Promise.all(
    Object.values(buildConfig).map((config) => {
      const outputOptions: OutputOptions = {
        format: config.format as ModuleFormat,
        dir: config.output.path,
        exports: config.format === 'cjs' ? 'named' : undefined,
        paths: pathRewriter
      }
      return bundle.write(outputOptions)
    })
  )
}

export const allComponents = parallel(
  withTaskName('allComponents:buildAllComponents', buildAllComponents),
  withTaskName('allComponents:buildAllComponentsEntry', allComponentsEntry),
  series(
    withTaskName('allComponents:buildAllComponentsEntryTypes', entryTypes),
    copyEntryTypes(),
    withTaskName('allComponents:clean(types)', () =>
      run('rm -rf dist/allComponentsEntryTypes')
    )
  )
)
