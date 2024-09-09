import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/jsconfig/index.js'),
  file: ['jsconfig.json'],
})
