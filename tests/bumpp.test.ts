import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/bumpp/index.js')

describe('Generator bumpp', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['.github/workflows/release.yml']

    assert.file(expected)
    assert.JSONFileContent('package.json', {
      scripts: {
        release: 'bumpp && pnpm publish',
      },
    })
  })
})
