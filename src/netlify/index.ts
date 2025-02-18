import BaseGenerator from '../base-generator'

export default class NetlifyGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('netlify.toml'),
      this.destinationPath('netlify.toml'),
    )
  }
}
