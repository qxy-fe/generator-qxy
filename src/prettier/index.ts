import { type GeneratorOptions } from 'yeoman-generator'
import BaseGenerator from '../base-generator.js'

export default class PrettierGenerator extends BaseGenerator {
  protected sharedConfig: string | Record<string, string | number | boolean>

  constructor (args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option(`sharedConfig`, {
      type: String,
      default: `@qxy/prettier-config`,
      description: `sharedConfig to use`,
    })
  }

  initializing () {
    this.sharedConfig = this.options.sharedConfig || {
      semi: false,
      tabWidth: 2,
      singleQuote: true,
      trailingComma: `all`,
    }
  }

  writing () {
    const devDeps = [`prettier`]

    if (typeof this.sharedConfig === `string`) {
      devDeps.push(this.sharedConfig)
    }

    // prettierIgnore in package.json is not supported
    // https://github.com/prettier/prettier/issues/3460
    this.fs.copy(
      this.templatePath(`_prettierignore`),
      this.destinationPath(`.prettierignore`),
    )

    this.addFields({
      prettier: this.sharedConfig,
    })

    this.addDeps({ devDeps })
  }
}
