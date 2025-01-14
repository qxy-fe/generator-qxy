import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/autofix-ci/index.js',
  file: ['.github/workflows/autofix.yml'],
})
