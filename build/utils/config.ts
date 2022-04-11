import path from 'path'
import { distTitans } from './paths'
export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    output: {
      name: 'es',
      path: path.resolve(distTitans, 'es')
    },
    bundle: {
      path: 'titans-ui/es'
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(distTitans, 'lib')
    },
    bundle: {
      path: 'titans-ui/lib'
    }
  }
}

export type BuildConfig = typeof buildConfig
