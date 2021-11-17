import BaseGenerator from '../base-generator.js'

export default class SortPackageJsonGenerator extends BaseGenerator {
  writing(): void {
    this.addDeps({
      devDeps: ['sort-package-json'],
    })
  }
}
