import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/vscode/index.js'),
  file: ['.vscode/settings.json'],
})
