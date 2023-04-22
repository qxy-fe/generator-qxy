import BaseGenerator from '../base-generator.js'
import type { GeneratorOptions } from 'yeoman-generator'

export default class HuskyGenerator extends BaseGenerator {
  protected commitlint: boolean

  protected lintStaged: boolean

  protected nanoStaged: boolean

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

    this.option('nanoStaged', {
      type: Boolean,
      default: false,
      description: 'use nano-staged or not',
    })

    this.commitlint = this.options.commitlint
    this.lintStaged = this.options.lintStaged
    this.nanoStaged = this.options.nanoStaged
  }

  writing() {
    // ====================
    // Generate config
    // ====================
    if (this.commitlint) {
      this.fs.copy(this.templatePath('commit-msg'), this.destinationPath('.husky/commit-msg'))
    }

    if (this.lintStaged) {
      this.fs.copy(this.templatePath('pre-commit-lint'), this.destinationPath('.husky/pre-commit'))
    }

    if (this.nanoStaged) {
      this.fs.copy(this.templatePath('pre-commit-nano'), this.destinationPath('.husky/pre-commit'))
    }

    // ====================
    // Add devDependencies
    // ====================
    this.addDeps({ devDeps: ['husky'] })

    // ====================
    // Add Scripts
    // ====================
    this.addFields({
      scripts: {
        prepare: 'husky install',
      },
    })
  }
}
