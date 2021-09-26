import BaseGenerator from '../base-generator'
import type { GeneratorOptions } from 'yeoman-generator'

export default class HuskyGenerator extends BaseGenerator {
  protected commitlint: boolean

  protected lintStaged: boolean

  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option('commitlint', {
      type: Boolean,
      default: false,
      description: 'use commitlint or not',
    })

    this.option('lintStaged', {
      type: Boolean,
      default: false,
      description: 'use lint-staged or not',
    })
  }

  initializing(): void {
    this.commitlint = this.options.commitlint
    this.lintStaged = this.options.lintStaged
  }

  async writing(): Promise<void> {
    // ====================
    // Generate config
    // ====================
    if (this.commitlint) {
      this.fs.copy(
        this.templatePath('commit-msg'),
        this.destinationPath('.husky/commit-msg'),
      )
    }

    if (this.lintStaged) {
      this.fs.copy(
        this.templatePath('pre-commit'),
        this.destinationPath('.husky/pre-commit'),
      )
    }

    // ====================
    // Add devDependencies
    // ====================
    await this.addDeps({ devDeps: ['husky'] })

    // ====================
    // Add Scripts
    // ====================
    const prepare = `husky install`

    this.addFields({ scripts: { prepare } })
  }
}
