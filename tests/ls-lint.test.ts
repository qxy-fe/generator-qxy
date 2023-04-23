import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/ls-lint/index.js')

describe('Generator ls-lint', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['.ls-lint.yml']

    assert.file(expected)
    assert.JSONFileContent('package.json', {
      scripts: {
        'lint:ls': 'ls-lint',
      },
    })
  })
})
