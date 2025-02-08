import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/husky/index.js',
  file: ['.husky/pre-commit'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          prepare: 'husky',
        },
        devDependencies: {
          husky: '^0.0.0',
        },
      },
    },
  ],
})
