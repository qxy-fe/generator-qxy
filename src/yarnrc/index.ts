import fs from 'node:fs'
import ejs from 'ejs'
import { type GeneratorOptions } from 'yeoman-generator'
import BaseGenerator from '../base-generator.js'

export default class YarnrcGenerator extends BaseGenerator {
  protected registry: string | false

  constructor (args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.option(`registry`, {
      type: String,
      default: `https://registry.npmmirror.com`,
      description: `registry to use`,
    })
  }

  async initializing () {
    this.registry = this.options.registry

    const yarnrc = await ejs.renderFile(this.templatePath(`_yarnrc.ejs`), {
      registry: this.registry,
    })

    fs.writeFileSync(this.destinationPath(`.yarnrc`), yarnrc)
  }
}
