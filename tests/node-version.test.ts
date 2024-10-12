import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/node-version/index.js'),
  file: ['.node-version'],
})
