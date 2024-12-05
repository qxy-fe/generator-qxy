import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/unocss/index.js',
  file: ['uno.config.ts'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        dependencies: {
          '@unocss/reset': '^0.0.0',
        },
        devDependencies: {
          unocss: '^0.0.0',
        },
      },
    },
  ],
})
