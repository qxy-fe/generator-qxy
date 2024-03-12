import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/utils/index.js')

describe('Generator utils', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['scripts/utils.ts']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      devDependencies: {
        execa: '^0.0.0',
        tsx: '^0.0.0',
      },
    })
  })
})
