import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/bumpp/index.js',
  file: ['.github/workflows/release.yml'],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          release: 'run-s release:check release:version',
          'release:check': 'run-s lint typecheck test',
          'release:version': 'bumpp',
        },
        devDependencies: {
          bumpp: '^0.0.0',
          'npm-run-all2': '^0.0.0',
        },
      },
    },
  ],
})
