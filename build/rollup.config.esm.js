import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import jsx from 'acorn-jsx'
// import typescript from '@rollup/plugin-typescript'
import scss from 'rollup-plugin-scss'
import * as path from 'path'
// import postcss from 'postcss'
// import autoprefixer from 'autoprefixer'
import vue from 'rollup-plugin-vue'
import vueJsx from 'rollup-plugin-vue-jsx-compat'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'

const outDir = 'es'
export default {
  input: path.resolve(__dirname, '../src/index.ts'),
  output: {
    dir: outDir
    // format: 'umd'
    // file: 'index.es.js'
  },
  // acornInjectPlugins: [jsx()],
  plugins: [
    vue({
      target: 'browser'
      // css: false,
    }),
    resolve(),
    commonjs(),
    vueJsx(),
    // dts(),
    esbuild({
      jsxFactory: 'vueJsxCompat',
      jsxFragment: 'Vue.Fragment'
    }),
    // typescript({
    //   // rootDir: 'src',
    //   outDir: 'es',
    //   declaration: true,
    //   tsconfig: './tsconfig.json'
    // }),
    scss({
      output: `${outDir}/index.css`,
      outputStyle: 'compressed',
      // processor: () => postcss([autoprefixer({ overrideBrowserslist: 'Edge 18' })]),
      prefix: `@import "src/style/global-import.scss";`
    })
  ],
  external(id) {
    return /^vue/.test(id)
  }
}
