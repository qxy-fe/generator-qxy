import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/changeset/index.js')

describe('Generator changeset', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = [
      '.github/workflows/release.yml',
      '.changeset/README.md',
      '.changeset/config.json',
    ]

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        publish: 'pnpm build && changeset publish',
      },
      devDependencies: {
        '@changesets/cli': '^0.0.0',
        '@changesets/changelog-github': '^0.0.0',
      },
    })
  })
})
