import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/autofix-ci/index.js',
  file: ['.github/workflows/autofix.yml'],
})
