import { run } from '@ntnyq/generator-tester'

run({
  generator: 'generators/tailwindcss/index.js',
  file: ['.vscode/tailwind.json'],
  jsonFileContent: [
    {
      filename: '.vscode/settings.json',
      content: { 'css.customData': ['.vscode/tailwind.json'] },
    },
  ],
})
