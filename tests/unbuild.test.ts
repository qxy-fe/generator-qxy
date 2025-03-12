import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/unbuild/index.js',
  file: ['build.config.ts'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          build: 'unbuild',
          dev: 'unbuild --watch',
          stub: 'unbuild --stub',
        },
        devDependencies: {
          unbuild: '^0.0.0',
        },
      },
    },
  ],
})
