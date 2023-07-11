import BaseGenerator from '../base-generator'

export default class TsconfigGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'))
  }
}
