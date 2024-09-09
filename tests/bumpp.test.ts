import { run } from '@ntnyq/generator-tester'
import { resolve } from '../scripts/utils'

run({
  generator: resolve('generators/bumpp/index.js'),
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
