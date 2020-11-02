import BaseGenerator from '../base-generator'

export = class LsLintGenerator extends BaseGenerator {
  writing(): void {
    const devDeps = ['@ls-lint/ls-lint']

    this.addFields({
      scripts: {
        'lint:ls': `ls-lint`,
      },
    })
    this.fs.copyTpl(
      this.templatePath('.ls-lint.yml.ejs'),
      this.destinationPath('.ls-lint.yml'),
      {}
    )

    // ===================
    // Add devDependencies
    // ===================
    this.addDependencies({ devDeps })
  }
}
