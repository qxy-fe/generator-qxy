import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/oxfmt/index.js',
  file: ['.oxfmtrc.json'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          format: 'oxfmt',
          'format:check': 'oxfmt --check',
        },
        devDependencies: {
          oxfmt: '^0.0.0',
        },
      },
    },
  ],
})
