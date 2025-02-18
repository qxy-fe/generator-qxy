import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/dprint/index.js',
  file: ['dprint.json'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          format: 'dprint fmt',
        },
        devDependencies: {
          dprint: '^0.0.0',
        },
      },
    },
  ],
})
