import BaseGenerator from '../base-generator'

export default class NodeVersionGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('.node-version'),
      this.destinationPath('.node-version'),
    )
  }
}
