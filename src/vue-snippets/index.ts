import BaseGenerator from '../base-generator'

export default class VueSnippetsGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('vue-sfc.code-snippets'),
      this.destinationPath('.vscode/vue-sfc.code-snippets'),
    )
  }
}
