import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/netlify/index.js'),
  file: ['netlify.toml'],
})
