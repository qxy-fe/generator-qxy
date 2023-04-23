import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/sort-package-json/index.js')

describe('Generator sort-package-json', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      devDependencies: {
        'sort-package-json': '^0.0.0',
      },
    })
  })
})
