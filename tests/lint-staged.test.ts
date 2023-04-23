import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/lint-staged/index.js')

describe('Generator lint-staged', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      'lint-staged': {
        '*.{js,ts,vue,json,yml,yaml,md}': 'eslint --fix',
      },
      devDependencies: {
        'lint-staged': '^0.0.0',
      },
    })
  })
})
