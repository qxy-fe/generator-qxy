import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/bumpp/index.js',
  file: ['.github/workflows/release.yml'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          release: 'bumpp && pnpm publish',
        },
        devDependencies: {
          bumpp: '^0.0.0',
        },
      },
    },
  ],
})
