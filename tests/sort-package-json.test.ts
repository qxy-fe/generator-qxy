import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/sort-package-json/index.js',
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        devDependencies: {
          'sort-package-json': '^0.0.0',
        },
      },
    },
  ],
})
