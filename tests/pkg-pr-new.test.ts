import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/pkg-pr-new/index.js',
  file: ['.github/workflows/pkg-pr-new.yml'],
})
