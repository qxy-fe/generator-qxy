import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/netlify/index.js',
  file: ['netlify.toml'],
})
