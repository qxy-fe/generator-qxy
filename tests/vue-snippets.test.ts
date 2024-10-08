import { beforeEach, describe, it } from 'vitest'
import assert from 'yeoman-assert'
import helpers from 'yeoman-test'
import { resolve } from '../scripts/utils'

const GENERATOR = resolve('generators/vue-snippets/index.js')

describe('Generator vue-snippets', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['.vscode/vue-sfc.code-snippets']

    assert.file(expected)
  })
})
