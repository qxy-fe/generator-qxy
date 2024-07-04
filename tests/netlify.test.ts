import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/netlify/index.js')

describe('Generator netlify', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['netlify.toml']

    assert.file(expected)
  })
})
