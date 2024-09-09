import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/eslint/index.js'),
  file: ['.eslintrc.json'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          lint: 'eslint .',
        },
        devDependencies: {
          eslint: '^0.0.0',
          typescript: '^0.0.0',
          '@qxy/eslint-config': '^0.0.0',
        },
      },
    },
  ],
})
