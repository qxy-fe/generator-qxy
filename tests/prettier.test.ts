import { beforeEach, describe, it } from 'vitest'
import assert from 'yeoman-assert'
import helpers from 'yeoman-test'
import { resolve } from '../scripts/utils'

const GENERATOR = resolve('generators/prettier/index.js')

describe('Generator prettier base', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR).withAnswers({
      sharedConfig: '@qxy/prettier-config',
      overrides: false,
    })
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        format: 'prettier -uw .',
      },
      devDependencies: {
        prettier: '^0.0.0',
        '@qxy/prettier-config': '^0.0.0',
      },
    })
  })
})

describe('Generator prettier overrides', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR).withAnswers({
      sharedConfig: 'ntnyq',
      overrides: true,
    })
  })

  it('creates expected files', () => {
    const expected = ['.prettierignore', 'prettier.config.cjs']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        format: 'prettier -uw .',
      },
      devDependencies: {
        prettier: '^0.0.0',
        '@ntnyq/prettier-config': '^0.0.0',
      },
    })
  })

  it('file content', () => {
    assert.fileContent('prettier.config.cjs', '@ntnyq/prettier-config')
  })
})
