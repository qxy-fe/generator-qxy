import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/vue-snippets/index.js',
  file: ['.vscode/vue-sfc.code-snippets'],
})
