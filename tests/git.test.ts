import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/git/index.js'),
  file: ['.gitignore', '.gitattributes'],
})
