import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/jsr/index.js'),
  file: ['jsr.json'],
})
