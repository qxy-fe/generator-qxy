import fs from 'fs'
import ejs from 'ejs'
import BaseGenerator from '../base-generator'
import type { GeneratorOptions } from 'yeoman-generator'

export default class YarnrcGenerator extends BaseGenerator {
  protected registry: string | false

  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option('registry', {
      type: String,
      default: '',
      description: 'registry to use',
    })
  }

  async initializing(): Promise<void> {
    this.registry = this.options.registry

    const yarnrc = await ejs.renderFile(this.templatePath('_yarnrc.ejs'), {
      registry: this.registry,
    })

    fs.writeFileSync(this.destinationPath('.yarnrc'), yarnrc)
  }
}
