import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/husky/index.js')

describe('Generator husky', () => {
  it('creates expected files', async () => {
    const expected = ['.husky/pre-commit']
    await helpers.run(GENERATOR)
    assert.file(expected)
  })

  it('extends package.json', async () => {
    await helpers.run(GENERATOR)
    assert.JSONFileContent('package.json', {
      scripts: {
        prepare: 'husky',
      },
      devDependencies: {
        husky: '^0.0.0',
      },
    })
  })
})
