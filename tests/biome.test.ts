import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/biome/index.js',
  file: ['biome.json'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          check: 'biome check',
          format: 'biome format --write',
        },
        devDependencies: {
          '@biomejs/biome': '^0.0.0',
        },
      },
    },
  ],
})
