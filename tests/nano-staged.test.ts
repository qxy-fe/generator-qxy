import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/nano-staged/index.js')

describe('Generator nano-staged', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    assert.JSONFileContent('package.json', {
      'nano-staged': {
        '*.{js,ts,cjs,vue,json,yaml,yml,md}': 'eslint --fix',
      },
    })
  })
})
