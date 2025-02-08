import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/commitlint/index.js',
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        commitlint: {
          extends: ['@commitlint/config-conventional'],
        },
        devDependencies: {
          '@commitlint/cli': '^0.0.0',
          '@commitlint/config-conventional': '^0.0.0',
        },
      },
    },
  ],
})
