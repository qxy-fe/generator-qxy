import BaseGenerator from '../base-generator.js'

export default class GitGenerator extends BaseGenerator {
  writing () {
    this.fs.copy(
      this.templatePath(`_gitattributes`),
      this.destinationPath(`.gitattributes`),
    )

    this.fs.copyTpl(
      this.templatePath(`_gitignore.ejs`),
      this.destinationPath(`.gitignore`),
    )
  }
}
