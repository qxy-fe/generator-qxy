import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from '../scripts/utils'

const GENERATOR = resolve('generators/vuepress/index.js')

describe('Generator vuepress', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['docs/.vuepress/config.ts', 'docs/README.md']

    assert.file(expected)
  })

  it('extends package.json', () => {
    assert.JSONFileContent('package.json', {
      scripts: {
        'dev:docs': 'vuepress dev docs',
        'build:docs': 'vuepress build docs',
      },
      devDependencies: {
        vue: '^0.0.0',
        vuepress: '^0.0.0',
        '@vuepress/bundler-vite': '^0.0.0',
        '@vuepress/theme-default': '^0.0.0',
      },
    })
  })
})
