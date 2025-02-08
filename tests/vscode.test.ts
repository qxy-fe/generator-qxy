import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/vscode/index.js',
  file: ['.vscode/settings.json'],
})
