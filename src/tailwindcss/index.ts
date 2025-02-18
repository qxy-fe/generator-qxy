import BaseGenerator from '../base-generator'

export default class TailwindCSSGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('tailwind.json'),
      this.destinationPath('.vscode/tailwind.json'),
    )

    this.fs.extendJSON(this.destinationPath('.vscode/settings.json'), {
      'css.customData': ['.vscode/tailwind.json'],
    })
  }
}
