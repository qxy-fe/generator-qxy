import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from '../scripts/utils'

const GENERATOR = resolve('generators/vercel/index.js')

describe('Generator vercel', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['vercel.json']

    assert.file(expected)
  })
})
