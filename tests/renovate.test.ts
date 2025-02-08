import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/renovate/index.js',
  file: ['.github/renovate.json'],
})
