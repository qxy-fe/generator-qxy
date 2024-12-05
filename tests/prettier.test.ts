import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/prettier/index.js',
  file: ['prettier.config.mjs', '.prettierignore'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        devDependencies: {
          prettier: '^0.0.0',
          '@ntnyq/prettier-config': '^0.0.0',
        },
      },
    },
  ],
})
