import BaseGenerator from '../base-generator.js'

export default class ChangesetGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('release.yml'),
      this.destinationPath('.github/workflows/release.yml'),
    )

    this.fs.copy(this.templatePath('README.md'), this.destinationPath('.changeset/README.md'))

    this.fs.copy(this.templatePath('config.json'), this.destinationPath('.changeset/config.json'))

    this.addFields({
      scripts: {
        publish: 'pnpm build && changeset publish',
      },
    })

    this.addDeps({ devDeps: ['@changesets/cli', '@changesets/changelog-github'] })
  }
}
