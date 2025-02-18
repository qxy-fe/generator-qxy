import BaseGenerator from '../base-generator'

export default class TurboGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('turbo.json'),
      this.destinationPath('turbo.json'),
    )

    const devDeps = ['turbo']

    this.addDeps({ devDeps })
  }
}
