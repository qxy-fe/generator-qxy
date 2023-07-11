import BaseGenerator from '../base-generator'

export default class LsLintGenerator extends BaseGenerator {
  writing() {
    const devDeps = ['@ls-lint/ls-lint']

    this.addFields({
      scripts: {
        'lint:ls': 'ls-lint',
      },
    })
    this.fs.copy(this.templatePath('_ls-lint.yml'), this.destinationPath('.ls-lint.yml'))

    // ===================
    // Add devDependencies
    // ===================
    this.addDeps({ devDeps })
  }
}
