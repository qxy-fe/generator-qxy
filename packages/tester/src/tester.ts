import { beforeEach, describe, it } from 'vitest'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import { toArray } from './utils'
import type { TestCasesOptions, Tester, TesterInitOptions } from './types'

export async function createTester(options: TesterInitOptions): Promise<Tester> {
  function run(cases: TestCasesOptions) {
    describe(options.name || 'generator-to-test', () => {
      const files = toArray(cases.file)
      const jsonFileContentCases = toArray(cases.jsonFileContent)

      beforeEach(async () => {
        await helpers.run(options.generator)
      })

      if (files.length) {
        describe('files', () => {
          it('files', () => {
            assert.file(files)
          })
        })
      }

      if (jsonFileContentCases.length) {
        describe('jsonFileContent', () => {
          jsonFileContentCases.forEach(({ filename, content }, idx) => {
            it(`jsonFileContent - ${idx}`, () => {
              assert.jsonFileContent(filename, content)
            })
          })
        })
      }
    })
  }

  return {
    run,
  }
}
