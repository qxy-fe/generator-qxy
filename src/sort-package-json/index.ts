import BaseGenerator from '../base-generator'

export default class SortPackageJsonGenerator extends BaseGenerator {
  async writing(): Promise<void> {
    await this.addDeps({
      devDeps: ['sort-package-json'],
    })
  }
}
