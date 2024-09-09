import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/turbo/index.js'),
  file: ['turbo.json'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        devDependencies: {
          turbo: '^0.0.0',
        },
      },
    },
  ],
})
