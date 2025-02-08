import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/nano-staged/index.js',
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        'nano-staged': {
          '*.{js,ts,cjs,mjs,vue,json,yaml,yml,md}': 'eslint --fix',
          '*.{css,scss,html}': 'prettier -uw',
        },
        devDependencies: {
          'nano-staged': '^0.0.0',
        },
      },
    },
  ],
})
