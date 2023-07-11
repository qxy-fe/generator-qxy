import BaseGenerator from '../base-generator'

export default class JsconfigGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(this.templatePath('jsconfig.json'), this.destinationPath('jsconfig.json'))
  }
}
