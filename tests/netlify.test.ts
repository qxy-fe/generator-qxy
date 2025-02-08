import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/netlify/index.js',
  file: ['netlify.toml'],
})
