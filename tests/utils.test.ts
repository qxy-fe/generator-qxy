import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/utils/index.js',
  file: ['scripts/utils.ts'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        devDependencies: {
          execa: '^0.0.0',
          tsx: '^0.0.0',
        },
      },
    },
  ],
})
