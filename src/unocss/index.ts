import BaseGenerator from '../base-generator.js'

export default class UnoCSSGenerator extends BaseGenerator {
  writing() {
    const devDeps = ['unocss', '@unocss/reset']

    this.fs.copy(
      this.templatePath('unocss.config.ts.ejs'),
      this.destinationPath('unocss.config.ts'),
    )

    this.addDeps({ devDeps })
  }
}
