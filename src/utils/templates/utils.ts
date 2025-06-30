import path from 'node:path'
import { x } from 'tinyexec'
import type { Options } from 'tinyexec'

const rootPath = path.resolve(import.meta.dirname, '..')

export const resolve = (...args: string[]) => path.resolve(rootPath, ...args)

export async function runCommand(
  command: string,
  args?: string[],
  options: Partial<Options> = {},
) {
  await x(command, args, {
    ...options,
    nodeOptions: {
      cwd: rootPath,
      stdio: 'inherit',
      ...options.nodeOptions,
    },
  })
}
