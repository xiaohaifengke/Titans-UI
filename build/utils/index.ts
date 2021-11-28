import { projectRoot } from './paths'
import { spawn } from 'child_process'

export type SimpleFunction = (...args: any[]) => any

export function withTaskName(
  displayName: string,
  taskFunction: SimpleFunction,
  description?: string
) {
  return Object.assign(taskFunction, { displayName, description })
}

export async function run(commandStr: string) {
  return new Promise<void>((resolve) => {
    const [command, ...args] = commandStr.split(' ')
    const childProcess = spawn(command, args, {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true
    })
    childProcess.on('close', resolve)
  })
}

export function pathRewriter(outputName: string) {
  return (id: string) => {
    return id.replace(/@titans-ui\//g, `titans-ui/${outputName}/`)
  }
}
