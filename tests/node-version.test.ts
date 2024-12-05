import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/node-version/index.js',
  file: ['.node-version'],
})
