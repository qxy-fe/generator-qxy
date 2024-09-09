import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/nano-staged/index.js'),
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        'nano-staged': {
          '*.{js,ts,cjs,mjs,vue,json,yaml,yml,md}': 'eslint --fix',
        },
        devDependencies: {
          'nano-staged': '^0.0.0',
        },
      },
    },
  ],
})
