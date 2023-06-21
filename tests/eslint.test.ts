import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/eslint/index.js')

describe('Generator eslint', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['.eslintrc.json']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        lint: 'eslint .',
      },
      devDependencies: {
        eslint: '^0.0.0',
        typescript: '^0.0.0',
        '@qxy/eslint-config': '^0.0.0',
      },
    })
  })
})
