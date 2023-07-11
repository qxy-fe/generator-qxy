import BaseGenerator from '../base-generator'

export default class SortPackageJsonGenerator extends BaseGenerator {
  writing() {
    this.addDeps({
      devDeps: ['sort-package-json'],
    })
  }
}
