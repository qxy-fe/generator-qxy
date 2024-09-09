import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/commitlint/index.js'),
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        commitlint: {
          extends: ['@commitlint/config-conventional'],
        },
        devDependencies: {
          '@commitlint/cli': '^0.0.0',
          '@commitlint/config-conventional': '^0.0.0',
        },
      },
    },
  ],
})
