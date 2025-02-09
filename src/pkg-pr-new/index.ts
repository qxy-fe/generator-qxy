import BaseGenerator from '../base-generator'

export default class PkgPrNewGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('pkg-pr-new.yml'),
      this.destinationPath('.github/workflows/pkg-pr-new.yml'),
    )
  }
}
