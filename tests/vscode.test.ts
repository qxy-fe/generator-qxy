import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/vscode/index.js',
  file: ['.vscode/settings.json'],
})
