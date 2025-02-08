import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/publint/index.js',
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          'lint:pkg': 'publint',
        },
        devDependencies: {
          publint: '^0.0.0',
        },
      },
    },
  ],
})
