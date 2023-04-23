import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/publint/index.js')

describe('Generator publint', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        'lint:pkg': 'publint',
      },
      devDependencies: {
        publint: '^0.0.0',
      },
    })
  })
})
