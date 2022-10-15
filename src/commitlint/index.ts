import BaseGenerator from '../base-generator.js'

export default class CommitlintGenerator extends BaseGenerator {
  writing () {
    const extendsConfig = [`@commitlint/config-conventional`]
    const devDeps = [
      `@commitlint/cli`,
      `@commitlint/config-conventional`,
    ]

    this.addFields({
      commitlint: {
        extends: extendsConfig,
      },
    })

    this.addDeps({ devDeps })
  }
}
