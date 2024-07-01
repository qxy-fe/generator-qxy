import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/nano-staged/index.js')

describe('Generator nano-staged', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      'nano-staged': {
        '*.{js,ts,cjs,mjs,vue,json,yaml,yml,md}': 'eslint --fix',
      },
      devDependencies: {
        'nano-staged': '^0.0.0',
      },
    })
  })
})
