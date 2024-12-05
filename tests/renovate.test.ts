import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/renovate/index.js',
  file: ['.github/renovate.json'],
})
