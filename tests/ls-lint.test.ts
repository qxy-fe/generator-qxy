import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/ls-lint/index.js',
  file: ['.ls-lint.yml'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          'lint:ls': 'ls-lint',
        },
        devDependencies: {
          '@ls-lint/ls-lint': '^0.0.0',
        },
      },
    },
  ],
})
