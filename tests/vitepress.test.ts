import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/vitepress/index.js',
  file: [
    'docs/.vitepress/config.ts',
    'docs/.vitepress/config/head.ts',
    'docs/.vitepress/config/theme.ts',
  ],

  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          'docs:dev': 'vitepress dev docs',
          'docs:build': 'vitepress build docs',
        },
        devDependencies: {
          vitepress: '^0.0.0',
        },
      },
    },
  ],
})
