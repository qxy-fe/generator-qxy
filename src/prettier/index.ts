import { ensurePrefix, ensureSuffix } from '../utils.js'
import BaseGenerator from '../base-generator.js'
import type { GeneratorOptions } from 'yeoman-generator'

export default class PrettierGenerator extends BaseGenerator {
  protected sharedConfig: string
  protected overrides: boolean

  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option('sharedConfig', {
      type: String,
      default: '@qxy/prettier-config',
      description: 'sharedConfig to use',
    })

    this.option('overrides', {
      type: Boolean,
      default: false,
      description: 'overrides sharedConfig',
    })
  }

  initializing() {
    this.sharedConfig = this.options.sharedConfig
    this.overrides = this.options.overrides
  }

  ensureConfigPattern(config: string) {
    return ensurePrefix('@', ensureSuffix('/prettier-config', config))
  }

  writing() {
    const sharedConfig = this.ensureConfigPattern(this.sharedConfig)
    const devDeps = ['prettier', sharedConfig]

    this.addFields({
      scripts: {
        format: 'prettier --uw .',
      },
      ...(this.overrides ? {} : { prettier: sharedConfig }),
    })

    this.addDeps({ devDeps })

    if (!this.overrides) return // overrides
    this.fs.copyTpl(
      this.templatePath('prettier.config.cjs'),
      this.destinationPath('prettier.config.cjs'),
      { sharedConfig },
    )

    // prettierIgnore in package.json is not supported
    // https://github.com/prettier/prettier/issues/3460
    this.fs.copy(this.templatePath('_prettierignore'), this.destinationPath('.prettierignore'))
  }
}
