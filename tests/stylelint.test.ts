import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/stylelint/index.js',
  file: ['stylelint.config.cjs'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          'lint:style': 'stylelint "src/**/*.{vue,scss}"',
        },
        devDependencies: {
          stylelint: '^0.0.0',
          prettier: '^0.0.0',
          postcss: '^0.0.0',
          '@qxy/stylelint-config': '^0.0.0',
        },
      },
    },
  ],
})
