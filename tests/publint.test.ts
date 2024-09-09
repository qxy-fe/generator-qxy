import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/publint/index.js'),
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          'lint:pkg': 'publint',
        },
        devDependencies: {
          publint: '^0.0.0',
        },
      },
    },
  ],
})
