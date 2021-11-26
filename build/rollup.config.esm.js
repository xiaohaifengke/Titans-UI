import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import jsx from 'acorn-jsx'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'
// import scss from 'rollup-plugin-scss'
import * as path from 'path'
// import postcss from 'postcss'
// import autoprefixer from 'autoprefixer'
import vue from 'rollup-plugin-vue'
// import vueJsx from 'rollup-plugin-vue-jsx-compat'
// import esbuild from 'rollup-plugin-esbuild'
// import dts from 'rollup-plugin-dts'

const outDir = 'es'
const defaults = { compilerOptions: { declaration: true } }
export default {
  input: path.resolve(__dirname, '../packages/titans-ui/index.ts'),
  output: {
    dir: outDir
  },
  plugins: [
    vue({
      target: 'browser'
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfigDefaults: defaults,
      rootDir: 'src',
      outDir: 'es',
      tsconfig: './tsconfig.json'
    })
  ],
  external(id) {
    return /^vue/.test(id)
  }
}
