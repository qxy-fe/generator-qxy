import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/license/index.js'),
  file: ['LICENSE'],
})
