import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/tsconfig/index.js'),
  file: ['tsconfig.json'],
})
