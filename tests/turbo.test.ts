import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/turbo/index.js',
  file: ['turbo.json'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        devDependencies: {
          turbo: '^0.0.0',
        },
      },
    },
  ],
})
