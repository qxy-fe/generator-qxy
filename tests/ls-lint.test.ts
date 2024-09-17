import { beforeEach, describe, it } from 'vitest'
import assert from 'yeoman-assert'
import helpers from 'yeoman-test'
import { resolve } from '../scripts/utils'

const GENERATOR = resolve('generators/ls-lint/index.js')

describe('Generator ls-lint', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['.ls-lint.yml']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        'lint:ls': 'ls-lint',
      },
      devDependencies: {
        '@ls-lint/ls-lint': '^0.0.0',
      },
    })
  })
})
