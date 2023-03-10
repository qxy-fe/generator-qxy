import BaseGenerator from '../base-generator.js'

export default class UtilsGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(this.templatePath('utils.ts.ejs'), this.destinationPath('scripts/utils.ts'))

    this.addDeps({ devDeps: ['execa', 'tsx'] })
  }
}
