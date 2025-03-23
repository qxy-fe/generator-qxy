import BaseGenerator from '../base-generator'

export default class VueShimsGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('shims.d.ts.ejs'),
      this.destinationPath('src/shims.d.ts'),
    )
  }
}
