export type Arrayable<T> = T | T[]

export interface FileContentMatch {
  filename: string
  content: Record<string, any>
}

export interface TestCasesOptions {
  file?: Arrayable<string>
  jsonFileContent?: Arrayable<FileContentMatch>
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

export interface Tester {
  run: (options: TestCasesOptions) => void
}
