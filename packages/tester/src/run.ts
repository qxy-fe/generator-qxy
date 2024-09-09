import { createTester } from './tester'
import type { TestCasesOptions, TesterInitOptions } from './types'

export async function run(options: TesterInitOptions & TestCasesOptions) {
  const tester = await createTester(options)
  return tester.run(options)
}
