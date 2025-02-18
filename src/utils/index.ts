import BaseGenerator from '../base-generator'

export default class UtilsGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('utils.ts'),
      this.destinationPath('scripts/utils.ts'),
    )

    this.addDeps({ devDeps: ['tinyexec', 'tsx'] })
  }
}
