import { rollup, OutputOptions } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import path from 'path'
import { outDir, projectRoot } from './utils/paths'
import { parallel } from 'gulp'

async function build() {
  const inputOptions = {
    input: path.resolve(projectRoot, 'packages/titans-ui/index.ts'),
    plugins: [
      vue({
        target: 'browser'
      }),
      nodeResolve(),
      commonjs(),
      typescript()
    ],
    external(id) {
      return /^vue/.test(id)
    }
  }
  const outputOptions: OutputOptions[] = [
    {
      format: 'umd',
      file: path.resolve(outDir, 'index.js'),
      name: 'TitansUI',
      exports: 'named',
      globals: {
        vue: 'Vue'
      }
    },
    {
      format: 'esm',
      file: path.resolve(outDir, 'index.esm.js')
    }
  ]
  // create a bundle
  const bundle = await rollup(inputOptions)

  return Promise.all(outputOptions.map((option) => bundle.write(option)))
}

export const allComponents = parallel(build)
