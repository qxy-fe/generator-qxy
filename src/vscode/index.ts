import type { GeneratorOptions } from 'yeoman-generator'
import BaseGenerator from '../base-generator.js'

export default class VscodeGenerator extends BaseGenerator {
  protected typescript: boolean

  protected vue: boolean

  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option('vue', {
      type: Boolean,
      default: false,
      description: 'use typescript or not?',
    })

    this.option('vue', {
      type: Boolean,
      default: false,
      description: 'use vue or not?',
    })
  }

  initializing(): void {
    this.typescript = this.options.typescript
    this.vue = this.options.vue
  }

  writing(): void {
    this.fs.copyTpl(
      this.templatePath('settings.json.ejs'),
      this.destinationPath('.vscode/settings.json'),
      {
        typescript: this.typescript,
        vue: this.vue,
      },
    )
  }
}
