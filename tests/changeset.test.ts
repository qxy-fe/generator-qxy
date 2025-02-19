import { run } from '@generator-qxy/tester'

run({
  generator: 'generators/changeset/index.js',
  file: [
    '.github/workflows/release.yml',
    '.changeset/README.md',
    '.changeset/config.json',
  ],
  jsonFileContent: [
    {
      filename: 'package.json',
      content: {
        scripts: {
          publish: 'pnpm build && changeset publish',
        },
        devDependencies: {
          '@changesets/cli': '^0.0.0',
          '@changesets/changelog-github': '^0.0.0',
        },
      },
    },
  ],
})
