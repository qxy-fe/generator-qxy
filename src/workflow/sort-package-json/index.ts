import BaseGenerator from '../../base-generator'

export = class SortPackageJsonGenerator extends BaseGenerator {
  writing(): void {
    this.addDependencies({
      devDeps: ['sort-package-json'],
    })
  }
}
