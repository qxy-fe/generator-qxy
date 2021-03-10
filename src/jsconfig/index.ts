import BaseGenerator from '../base-generator'

export default class JsconfigGenerator extends BaseGenerator {
  writing(): void {
    this.fs.copy(
      this.templatePath('jsconfig.json'),
      this.destinationPath('jsconfig.json'),
    )
  }
}
