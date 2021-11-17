import type { GeneratorOptions } from 'yeoman-generator'
import BaseGenerator from '../base-generator.js'

const prettierIgnore = ['node_modules', '/dist', '/static', '*.min.*']

export default class PrettierGenerator extends BaseGenerator {
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
      trailingComma: 'all',
    }
  }

  writing(): void {
    const devDeps = ['prettier']

    if (typeof this.sharedConfig === 'string') {
      devDeps.push(this.sharedConfig)
    }

    this.addFields({
      prettier: this.sharedConfig,
      prettierIgnore,
    })

    this.addDeps({ devDeps })
  }
}
