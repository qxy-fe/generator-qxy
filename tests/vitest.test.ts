import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/vitest/index.js')

describe('Generator vitest', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['vitest.config.ts']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        test: 'vitest',
        coverage: 'vitest --coverage',
      },
      devDependencies: {
        vitest: '^0.0.0',
        '@vitest/coverage-c8': '^0.0.0',
      },
    })
  })
})
