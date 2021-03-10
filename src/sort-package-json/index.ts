import BaseGenerator from '../base-generator'

export default class SortPackageJsonGenerator extends BaseGenerator {
  writing(): void {
    this.addDependencies({
      devDeps: ['sort-package-json'],
    })
  }
}
