import { type GeneratorOptions } from 'yeoman-generator'
import BaseGenerator from '../base-generator.js'

export default class StylelintGenerator extends BaseGenerator {
  protected vue: boolean

  constructor (args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option(`vue`, {
      type: Boolean,
      default: false,
      description: `use vue or not`,
    })
  }

  initializing () {
    this.vue = this.options.vue
  }

  writing () {
    const devDeps = [
      `stylelint`,
      `@qxy/stylelint-config-scss`,
      ...(this.vue ? [`@qxy/stylelint-config-vue`] : []),
      `@qxy/stylelint-config-order`,
      `@qxy/stylelint-config-prettier`,
    ]

    this.fs.copyTpl(
      this.templatePath(`stylelint.config.js.ejs`),
      this.destinationPath(`stylelint.config.js`),
      {
        vue: this.vue,
      },
    )

    this.fs.copy(
      this.templatePath(`_stylelintignore`),
      this.destinationPath(`.stylelintignore`),
    )

    this.addFields({
      scripts: { 'lint:style': `stylelint "src/**/*.{vue,scss}"` },
    })

    this.addDeps({ devDeps })
  }
}
