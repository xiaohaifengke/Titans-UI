import ts from 'gulp-typescript'
import { src, dest, series, parallel } from 'gulp'
import path from 'path'
import { buildConfig } from './utils/config'
import { run, withTaskName } from './utils'
import { distRoot, projectRoot } from './utils/paths'

export default function buildPackages(pkgPath: string, pkgName: string) {
  const tsConfig = path.resolve(projectRoot, 'tsconfig.json')
  const tasks = Object.values(buildConfig).map((config) => {
    const outputName = config.output.name
    const outputDir = path.resolve(config.output.path, pkgName)
    return series(
      withTaskName(
        `buildPackages:build::${pkgName}(${outputName})`,
        async () => {
          const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules/']
          const tsProject = ts.createProject(tsConfig, {
            module: config.module,
            declaration: true,
            moduleResolution: 'node',
            strict: false
          })
          src(inputs).pipe(tsProject()).pipe(dest(outputDir))
        }
      )
    )
  })
  return parallel(...tasks)
}
