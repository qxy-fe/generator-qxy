import BaseGenerator from '../base-generator'

export default class CommitlintGenerator extends BaseGenerator {
  writing() {
    this.addFields({
      commitlint: {
        extends: ['@commitlint/config-conventional'],
      },
    })

    this.addDeps({ devDeps: ['@commitlint/cli', '@commitlint/config-conventional'] })
  }
}
