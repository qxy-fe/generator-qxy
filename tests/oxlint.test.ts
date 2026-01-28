import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/oxlint/index.js',
  file: ['.oxlintrc.jsonc'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          lint: 'oxlint',
        },
        devDependencies: {
          oxlint: '^0.0.0',
        },
      },
    },
  ],
})
