import { series, parallel } from 'gulp'
import { run, withTaskName } from './utils'
import { copyFiles } from './copyFiles'

/**
 * 1. clean
 * 2. build style
 * 3. build utils
 * 4. build all components
 * 5. build every component
 * 6. copy package.json/README.md and so on
 * 7. publish
 */

export default series(
  withTaskName('clean', async () => run(`rm -rf dist`)),
  parallel(
    withTaskName('buildPackages', () =>
      run(`pnpm run --filter ./packages --parallel build`)
    ),
    withTaskName('buildAllComponents', () =>
      run('pnpm run build allComponents')
    ),
    withTaskName('buildEachComponent', () =>
      run('pnpm run build eachComponent')
    )
  ),
  copyFiles
)

export * from './allComponents'
export * from './eachComponent'
