import BaseGenerator from '../base-generator'

export default class ReadmeGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
    )
  }
}
