import BaseGenerator from '../base-generator'
import type { GeneratorOptions } from 'yeoman-generator'

export class GitIgnoreGenerator extends BaseGenerator {
  protected typescript: boolean

  protected coverage: boolean

  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option('typescript', {
      type: Boolean,
      default: false,
      description: 'use typescript or not',
    })

    this.option('coverage', {
      type: Boolean,
      default: false,
      description: 'has coverage or not',
    })
  }

  initializing(): void {
    this.typescript = this.options.typescript
    this.coverage = this.options.coverage
  }

  writing(): void {
    this.fs.copyTpl(
      this.templatePath('.gitignore.ejs'),
      this.destinationPath('.gitignore'),
      {
        typescript: this.typescript,
        coverage: this.coverage,
      }
    )
  }
}
