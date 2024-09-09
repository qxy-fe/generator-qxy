import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/husky/index.js'),
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
