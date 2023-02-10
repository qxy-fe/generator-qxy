import BaseGenerator from '../base-generator.js'

export default class VscodeGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('settings.json'),
      this.destinationPath('.vscode/settings.json'),
    )
  }
}
