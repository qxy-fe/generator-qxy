import BaseGenerator from '../base-generator'

export default class VSCodeGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('settings.json'),
      this.destinationPath('.vscode/settings.json'),
    )
  }
}
