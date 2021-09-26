import BaseGenerator from '../base-generator'

export default class LsLintGenerator extends BaseGenerator {
  async writing(): Promise<void> {
    const devDeps = ['@ls-lint/ls-lint']

    this.addFields({
      scripts: {
        'lint:ls': `ls-lint`,
      },
    })
    this.fs.copyTpl(
      this.templatePath('_ls-lint.yml.ejs'),
      this.destinationPath('.ls-lint.yml'),
      {},
    )

    // ===================
    // Add devDependencies
    // ===================
    await this.addDeps({ devDeps })
  }
}
