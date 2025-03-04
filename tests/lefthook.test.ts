import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/lefthook/index.js',
  file: ['lefthook.yaml'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          prepare: 'lefthook install',
        },
        devDependencies: {
          lefthook: '^0.0.0',
        },
      },
    },
  ],
})
