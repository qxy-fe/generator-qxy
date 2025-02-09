import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/utils/index.js',
  file: ['scripts/utils.ts'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        devDependencies: {
          tinyexec: '^0.0.0',
          tsx: '^0.0.0',
        },
      },
    },
  ],
})
