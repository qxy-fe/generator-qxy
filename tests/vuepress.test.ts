import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/vuepress/index.js',
  file: ['docs/.vuepress/config.ts', 'docs/README.md'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          'dev:docs': 'vuepress dev docs',
          'build:docs': 'vuepress build docs',
        },
        devDependencies: {
          vue: '^0.0.0',
          vuepress: '^0.0.0',
          '@vuepress/bundler-vite': '^0.0.0',
          '@vuepress/theme-default': '^0.0.0',
        },
      },
    },
  ],
})
