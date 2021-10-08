import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import * as path from 'path'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'

const env = process.env.NODE_ENV
const outDir = 'dist'
export default {
  input: path.resolve(__dirname, '../src/index.ts'),
  output: {
    file: `${outDir}/index${env === 'production' ? '.min' : ''}.js`,
    format: 'umd',
    name: 'TitansUI',
    exports: 'named',
    globals: {
      vue: 'Vue'
    }
  },
  plugins: [
    vue({
      target: 'browser'
    }),
    resolve(),
    commonjs(),
    typescript({
      rootDir: 'src',
      outDir: outDir,
      tsconfig: './tsconfig.json'
    }),
    scss({
      output: `${outDir}/index.css`,
      outputStyle: 'compressed',
      // processor: () => postcss([autoprefixer({ overrideBrowserslist: 'Edge 18' })]),
      prefix: `@import "src/style/global-import.scss";`
    }),
    env === 'production' && terser()
  ],
  external(id) {
    return /^vue/.test(id)
  }
}
