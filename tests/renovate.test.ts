import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/renovate/index.js'),
  file: ['.github/renovate.json'],
})
