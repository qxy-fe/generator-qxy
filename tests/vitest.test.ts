import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/vitest/index.js',
  file: ['vitest.config.ts'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          test: 'vitest',
          coverage: 'vitest --coverage',
        },
        devDependencies: {
          vitest: '^0.0.0',
          '@vitest/coverage-v8': '^0.0.0',
        },
      },
    },
  ],
})
