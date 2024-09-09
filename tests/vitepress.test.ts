import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from '../scripts/utils'

const GENERATOR = resolve('generators/vitepress/index.js')

describe('Generator vitepress', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = [
      'docs/.vitepress/config.ts',
      'docs/.vitepress/config/head.ts',
      'docs/.vitepress/config/theme.ts',
    ]

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        'docs:dev': 'vitepress dev docs',
        'docs:build': 'vitepress build docs',
      },
      devDependencies: {
        vitepress: '^0.0.0',
      },
    })
  })
})
