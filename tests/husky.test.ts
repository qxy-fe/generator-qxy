import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/husky/index.js')

describe('Generator husky', () => {
  it('creates expected files - lint-staged', async () => {
    const expected = ['.husky/pre-commit']
    await helpers.run(GENERATOR).withOptions({
      nanoStaged: true,
    })
    assert.file(expected)
  })

  it('creates expected files - nano-staged', async () => {
    const expected = ['.husky/pre-commit']
    await helpers.run(GENERATOR).withOptions({
      lintStaged: true,
    })
    assert.file(expected)
  })

  it('creates expected files - commitlint', async () => {
    const expected = ['.husky/commit-msg']
    await helpers.run(GENERATOR).withOptions({
      commitlint: true,
    })
    assert.file(expected)
  })

  it('extends package.json', async () => {
    await helpers.run(GENERATOR)
    assert.JSONFileContent('package.json', {
      scripts: {
        prepare: 'husky install',
      },
      devDependencies: {
        husky: '^0.0.0',
      },
    })
  })
})
