import ts from 'gulp-typescript'
import { src, dest, series, parallel } from 'gulp'
import path from 'path'
import { buildConfig } from './utils/config'
import { withTaskName } from './utils'
import { outDir, projectRoot } from './utils/paths'

export default function buildPackages(pkgPath: string, pkgName: string) {
  const tasks = Object.values(buildConfig).map((config) => {
    const format = config.format
    return series(
      withTaskName(`build:${pkgName}:${format}`, async () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json')
        const output = path.resolve(pkgPath, config.output.name)
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules/']
        const tsProject = ts.createProject(tsConfig, {
          module: config.module,
          declaration: true,
          moduleResolution: 'node',
          strict: false
        })
        src(inputs).pipe(tsProject()).pipe(dest(output))
      }),
      withTaskName(`copy:${pkgName}:${format}`, async () => {
        const outputDir = path.resolve(config.output.path, pkgName)
        src(`${config.output.name}/**/*`).pipe(dest(outputDir))
      })
    )
  })
  return parallel(...tasks)
}
