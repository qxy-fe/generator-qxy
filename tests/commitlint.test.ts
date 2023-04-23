import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/commitlint/index.js')

describe('Generator commitlint', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      commitlint: {
        extends: ['@commitlint/config-conventional'],
      },
      devDependencies: {
        '@commitlint/cli': '^0.0.0',
        '@commitlint/config-conventional': '^0.0.0',
      },
    })
  })
})
