import { series, parallel } from 'gulp'
import { run, withTaskName } from './utils'

/**
 * 1. clean
 * 2. build style
 * 3. build utils
 * 4. build all components
 * 5. build every component
 * 6. generate a components lib
 * 7. publish
 */

export default series(
  // withTaskName('clean', async () => run(`rm -rf dist`)),
  parallel(
    // withTaskName('build:packages', () =>
    //   run(`pnpm run --filter ./packages --parallel --stream build`)
    // ),
    // withTaskName('build:allComponents', () =>
    //   run('pnpm run build allComponents')
    // ),
    withTaskName('build:eachComponent', () =>
      run('pnpm run build buildEachComponent')
    )
  )
)

export * from './allComponents'
export * from './eachComponent'
