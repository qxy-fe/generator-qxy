import { ensurePrefix, ensureSuffix } from '../utils.js'
import BaseGenerator from '../base-generator.js'
import type { GeneratorOptions } from 'yeoman-generator'

export default class PrettierGenerator extends BaseGenerator {
  protected sharedConfig: string | Record<string, string | number | boolean>
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
      description: 'Overrides sharedConfig',
    })
  }

  initializing() {
    this.sharedConfig = this.options.sharedConfig || {
      semi: false,
      tabWidth: 2,
      singleQuote: true,
      trailingComma: 'all',
    }
  }

  ensureConfigPattern(config: string) {
    return ensurePrefix('@', ensureSuffix('/prettier-config', config))
  }

  writing() {
    const devDeps = ['prettier']

    if (typeof this.sharedConfig === 'string') {
      devDeps.push(this.ensureConfigPattern(this.sharedConfig))

      if (!this.overrides) return // overrides
      this.fs.copyTpl(
        this.templatePath('prettier.config.cjs'),
        this.destinationPath('prettier.config.cjs'),
        { sharedConfig: this.ensureConfigPattern(this.sharedConfig) },
      )
    }

    // prettierIgnore in package.json is not supported
    // https://github.com/prettier/prettier/issues/3460
    this.fs.copy(this.templatePath('_prettierignore'), this.destinationPath('.prettierignore'))

    this.addFields({
      scripts: {
        format: 'prettier --uw .',
      },
      ...(this.overrides
        ? {}
        : {
            prettier:
              typeof this.sharedConfig === 'string'
                ? this.ensureConfigPattern(this.sharedConfig)
                : this.sharedConfig,
          }),
    })

    this.addDeps({ devDeps })
  }
}
