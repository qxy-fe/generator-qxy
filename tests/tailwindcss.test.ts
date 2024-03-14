import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { beforeEach, describe, it } from 'vitest'
import { resolve } from './utils'

const GENERATOR = resolve('generators/tailwindcss/index.js')

describe('Generator tailwindcss', () => {
  beforeEach(async () => {
    await helpers.run(GENERATOR)
  })

  it('creates expected files', () => {
    const expected = ['.vscode/tailwind.json']

    assert.file(expected)
  })

  it('extends .vscode/settings.json', () => {
    assert.JSONFileContent('.vscode/settings.json', {
      'css.customData': ['.vscode/tailwind.json'],
    })
  })
})
