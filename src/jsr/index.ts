import BaseGenerator from '../base-generator'

export default class JsrGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('jsr.json'),
      this.destinationPath('jsr.json'),
    )
  }
}
