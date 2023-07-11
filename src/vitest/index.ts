import BaseGenerator from '../base-generator'

export default class VitestGenerator extends BaseGenerator {
  writing() {
    const devDeps = ['vitest', '@vitest/coverage-c8']

    this.fs.copy(this.templatePath('vitest.config.ts'), this.destinationPath('vitest.config.ts'))

    this.addFields({
      scripts: {
        test: 'vitest',
        coverage: 'vitest --coverage',
      },
    })

    this.addDeps({ devDeps })
  }
}
