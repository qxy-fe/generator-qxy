import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/autofix-ci/index.js'),
  file: ['.github/workflows/autofix-ci.yml'],
})
