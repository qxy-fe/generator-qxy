import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/unocss/index.js')

describe('Generator unocss', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['uno.config.ts']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      dependencies: {
        '@unocss/reset': '^0.0.0',
      },
      devDependencies: {
        unocss: '^0.0.0',
      },
    })
  })
})
