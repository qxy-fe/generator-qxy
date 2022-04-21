import BaseGenerator from '../base-generator.js'

export default class SortPackageJsonGenerator extends BaseGenerator {
  writing () {
    this.addDeps({
      devDeps: [`sort-package-json`],
    })
  }
}
