import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/svgo/index.js'),
  file: ['svgo.config.mjs'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          svgo: 'svgo -f src/icons/svg',
        },
        devDependencies: {
          svgo: '^0.0.0',
        },
      },
    },
  ],
})
