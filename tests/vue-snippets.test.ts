import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/vue-snippets/index.js',
  file: ['.vscode/vue-sfc.code-snippets'],
})
