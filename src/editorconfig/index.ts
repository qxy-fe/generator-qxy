import BaseGenerator from '../base-generator.js'

export default class EditorconfigGenerator extends BaseGenerator {
  writing () {
    this.fs.copy(
      this.templatePath(`_editorconfig`),
      this.destinationPath(`.editorconfig`),
    )
  }
}
