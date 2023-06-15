import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/eslint-flat-config/index.js')

describe('Generator editorconfig', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['eslint.config.mjs', '.npmrc', '.vscode/settings.json']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        lint: 'ESLINT_USE_FLAT_CONFIG=true eslint -c eslint.config.mjs --max-warnings 0 .',
      },
      devDependencies: {
        eslint: '^0.0.0',
        prettier: '^0.0.0',
        typescript: '^0.0.0',
        'eslint-define-config': '^0.0.0',
        '@ntnyq/prettier-config': '^0.0.0',
        '@ntnyq/eslint-config@next': '^0.0.0',
      },
    })
  })
})
