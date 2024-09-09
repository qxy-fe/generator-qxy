import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/cspell/index.js'),
  file: ['cspell.json'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          'lint:cspell': 'cspell "**"',
        },
        devDependencies: {
          cspell: '^0.0.0',
        },
      },
    },
  ],
})
