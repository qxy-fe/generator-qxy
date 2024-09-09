import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/lint-staged/index.js'),
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        'lint-staged': {
          '*.{js,ts,cjs,mjs,vue,json,yml,yaml,md}': 'eslint --fix',
        },
        devDependencies: {
          'lint-staged': '^0.0.0',
        },
      },
    },
  ],
})
