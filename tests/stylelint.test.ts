import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/stylelint/index.js')

describe('Generator stylelint', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['stylelint.config.cjs']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        'lint:style': 'stylelint "src/**/*.{vue,scss}"',
      },
      devDependencies: {
        stylelint: '^0.0.0',
        prettier: '^0.0.0',
        postcss: '^0.0.0',
        '@qxy/stylelint-config': '^0.0.0',
      },
    })
  })
})
