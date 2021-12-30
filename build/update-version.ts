import { series } from 'gulp'
import { run, withTaskName } from './utils'
import fs from 'fs'
import path from 'path'

/** pnpm version:
 * 1. 读取最新的version: process.env.npm_package_version
 * 2. 更新所有workspace中的package.json中的version字段
 * 3. 更新pnpm dependencies中@titans-ui/*的版本: `pnpm up "@titans-ui/*"`
 * 4. 打包：pnpm run build
 * ------------------------------------------------------------------
 * TODO:
 * pnpm preversion: pnpm run test
 * pnpm postversion: pnpm run build && git push && git push --tags && rm -rf dist
 */

function getPkgContent(filepath: string): string {
  return fs.readFileSync(filepath, 'utf-8')
}

function getWorkspaces(): string[] {
  return fs.readdirSync(path.join(__dirname, '../packages'))
}

function updatePkgs(version: string) {
  const workspacesPkgPath: string[] = getWorkspaces().map((ws) => {
    return path.resolve(__dirname, '../packages', ws, 'package.json')
  })

  workspacesPkgPath.forEach((pkgPath) => {
    const content = getPkgContent(pkgPath).replace(
      /"version"\s*:\s*"[^"]+"/,
      `"version": "${version}"`
    )
    fs.writeFileSync(pkgPath, content)
  })
}

export default series(
  withTaskName('updatePkgs', async () => {
    const pkg = require('../package.json')
    updatePkgs(pkg.version)
  }),
  withTaskName('update @titans-ui/*', async () => {
    run('pnpm up "@titans-ui/*"')
  })
)
