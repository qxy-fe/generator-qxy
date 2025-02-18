import BaseGenerator from '../base-generator'

export default class RenovateGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('renovate.json'),
      this.destinationPath('.github/renovate.json'),
    )
  }
}
