import BaseGenerator from '../base-generator'
import type { GeneratorOptions } from 'yeoman-generator'

export = class PrettierGenerator extends BaseGenerator {
  protected sharedConfig: string | Record<string, string | number | boolean>

  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option('sharedConfig', {
      type: String,
      default: '@qxy/prettier-config',
      description: 'sharedConfig to use',
    })
  }

  initializing(): void {
    this.sharedConfig = this.options.sharedConfig || {
      semi: false,
      tabWidth: 2,
      singleQuote: true,
      trailingComma: 'es5',
    }
  }

  writing(): void {
    const devDeps = ['prettier']

    if (typeof this.sharedConfig === 'string') {
      devDeps.push(this.sharedConfig)
    }

    this.addFields({
      prettier: this.sharedConfig,
    })

    this.addDependencies({ devDeps })
  }
}
