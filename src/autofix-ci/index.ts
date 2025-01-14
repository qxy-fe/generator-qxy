import BaseGenerator from '../base-generator'

export default class AutofixCIGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('autofix.yml'),
      this.destinationPath('.github/workflows/autofix.yml'),
    )
  }
}
