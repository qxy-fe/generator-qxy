import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/eslint-flat-config/index.js',
  file: ['eslint.config.mjs', '.vscode/settings.json'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          lint: 'eslint .',
        },
        devDependencies: {
          eslint: '^0.0.0',
          prettier: '^0.0.0',
          typescript: '^0.0.0',
          '@ntnyq/prettier-config': '^0.0.0',
          '@ntnyq/eslint-config': '^0.0.0',
        },
      },
    },
  ],
})
