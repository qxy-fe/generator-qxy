import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/git/index.js',
  file: ['.gitignore', '.gitattributes'],
})
