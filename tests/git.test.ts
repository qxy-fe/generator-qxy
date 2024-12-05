import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/git/index.js',
  file: ['.gitignore', '.gitattributes'],
})
