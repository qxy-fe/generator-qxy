import BaseGenerator from '../base-generator'

export default class LicenseGenerator extends BaseGenerator {
  writing() {
    const year = new Date().getFullYear()

    this.fs.copyTpl(
      this.templatePath('LICENSE.ejs'),
      this.destinationPath('LICENSE'),
      { year },
    )
  }
}
