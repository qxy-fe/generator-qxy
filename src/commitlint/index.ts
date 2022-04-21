import { type GeneratorOptions } from 'yeoman-generator'
import BaseGenerator from '../base-generator.js'

export default class CommitlintGenerator extends BaseGenerator {
  protected lerna: boolean

  protected sharedConfig: string

  constructor (args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option(`lerna`, {
      type: Boolean,
      default: false,
      description: `use lerna or not`,
    })

    this.option(`sharedConfig`, {
      type: String,
      default: ``,
      description: `sharedConfig to use`,
    })
  }

  initializing () {
    this.lerna = this.options.lerna
    this.sharedConfig =
      this.options.sharedConfig || `@commitlint/config-conventional`
  }

  writing () {
    const extendsConfig = [this.sharedConfig]
    const devDeps = [`@commitlint/cli`, this.sharedConfig]

    if (this.lerna) {
      extendsConfig.push(`@commitlint/config-lerna-scopes`)
      devDeps.push(`@commitlint/config-lerna-scopes`)
    }

    this.addFields({
      commitlint: {
        extends: extendsConfig,
      },
    })

    this.addDeps({ devDeps })
  }
}
