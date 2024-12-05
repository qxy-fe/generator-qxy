import { run } from '@ntnyq/generator-tester'

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
