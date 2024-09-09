import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/yarnrc/index.js'),
  file: ['.yarnrc'],
})
