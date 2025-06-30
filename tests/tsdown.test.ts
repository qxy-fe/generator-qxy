import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/tsdown/index.js',
  file: ['tsdown.config.ts'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          build: 'tsdown',
          dev: 'tsdown --watch',
        },
        devDependencies: {
          tsdown: '^0.0.0',
        },
      },
    },
  ],
})
