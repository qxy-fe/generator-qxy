import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/lint-staged/index.js',
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        'lint-staged': {
          '*.{js,ts,cjs,mjs,vue,json,yaml,yml,md}': 'eslint --fix',
          '*.{css,scss,html}': 'prettier -uw',
        },
        devDependencies: {
          'lint-staged': '^0.0.0',
        },
      },
    },
  ],
})
