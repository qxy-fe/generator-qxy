import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/vue-shims/index.js',
  file: ['src/shims.d.ts'],
})
