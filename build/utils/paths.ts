import path from 'path'
export const projectRoot = path.resolve(__dirname, '../../')
export const distRoot = path.resolve(projectRoot, 'dist')
export const packagesDir = path.resolve(projectRoot, 'packages')
export const componentsDir = path.resolve(projectRoot, 'packages/components')
export const utilsDir = path.resolve(projectRoot, 'packages/utils')
export const titansDir = path.resolve(projectRoot, 'packages/titans-ui')

export const distTitans = path.resolve(distRoot, 'titans-ui')
export const titansDist = path.resolve(distTitans, 'dist')
export const titansTheme = path.resolve(distTitans, 'theme-chalk')
