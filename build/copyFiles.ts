import { run } from './utils'
import { distTitans, titansDir, titansDist, titansTheme } from './utils/paths'

export async function copyFiles() {
  await run(`cp ${titansTheme}/css/index.css ${titansDist}/index.css`)
  await run(
    `ls ${titansDir}/ | grep -v .ts | xargs -I # cp -r ${titansDir}/# ${distTitans}/`
  )
}
