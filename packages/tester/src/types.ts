export type Arrayable<T> = T | T[]

export interface FileContentMatch {
  content: Record<string, any>
  filename: string
}

export interface TestCasesOptions {
  file?: Arrayable<string>
  jsonFileContent?: Arrayable<FileContentMatch>
}

export interface Tester {
  run: (options: TestCasesOptions) => void
}

export interface TesterInitOptions {
  /**
   * Name of the generator to test
   */
  name?: string

  /**
   * The path of the generator to test
   */
  generator: string
}
