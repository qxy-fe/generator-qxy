import BaseGenerator from '../base-generator'

export default class UnoCSSGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('uno.config.ts.ejs'),
      this.destinationPath('uno.config.ts'),
    )

    this.addDeps({
      deps: ['@unocss/reset'],
      devDeps: ['unocss'],
    })
  }
}
