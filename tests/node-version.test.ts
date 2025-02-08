import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/node-version/index.js',
  file: ['.node-version'],
})
