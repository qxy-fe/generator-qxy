import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/readme/index.js')

describe('Generator readme', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['README.md']

    assert.file(expected)
  })
})
