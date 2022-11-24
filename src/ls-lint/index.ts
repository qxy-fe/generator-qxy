import BaseGenerator from '../base-generator.js'

export default class LsLintGenerator extends BaseGenerator {
  writing () {
    const devDeps = [`@ls-lint/ls-lint`]

    this.addFields({
      scripts: {
        'lint:ls': `ls-lint`,
      },
    })
    this.fs.copyTpl(
      this.templatePath(`_ls-lint.yml`),
      this.destinationPath(`.ls-lint.yml`),
    )

    // ===================
    // Add devDependencies
    // ===================
    this.addDeps({ devDeps })
  }
}
