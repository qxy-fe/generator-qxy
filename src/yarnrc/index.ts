import BaseGenerator from '../base-generator'

export default class YarnrcGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(this.templatePath('_yarnrc.ejs'), this.destinationPath('.yarnrc'))
  }
}
