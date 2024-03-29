import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/svgo/index.js')

describe('Generator svgo', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['svgo.config.mjs']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        svgo: 'svgo -f src/icons/svg',
      },
      devDependencies: {
        svgo: '^0.0.0',
      },
    })
  })
})
