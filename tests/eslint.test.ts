import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/eslint/index.js',
  file: ['.eslintrc.json'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          lint: 'eslint .',
        },
        devDependencies: {
          eslint: '^0.0.0',
          typescript: '^0.0.0',
          '@qxy/eslint-config': '^0.0.0',
        },
      },
    },
  ],
})
