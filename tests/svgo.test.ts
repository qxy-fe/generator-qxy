import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/svgo/index.js',
  file: ['svgo.config.mjs'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          svgo: 'svgo -f src/icons/svg',
        },
        devDependencies: {
          svgo: '^0.0.0',
        },
      },
    },
  ],
})
