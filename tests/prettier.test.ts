import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/prettier/index.js',
  file: ['prettier.config.mjs', '.prettierignore'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          format: 'prettier -uw .',
        },
        devDependencies: {
          prettier: '^0.0.0',
          '@ntnyq/prettier-config': '^0.0.0',
        },
      },
    },
  ],
})
