import BaseGenerator from '../base-generator'

export default class StackblitzGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(this.templatePath('.stackblitzrc'), this.destinationPath('.stackblitzrc'))
  }
}
