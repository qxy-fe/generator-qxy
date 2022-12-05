import BaseGenerator from '../base-generator.js'

export default class ChangesetGenerator extends BaseGenerator {
  writing () {
    const devDeps = [
      `@changesets/cli`,
      `@changesets/changelog-github`,
    ]

    this.fs.copy(
      this.templatePath(`release.yml`),
      this.destinationPath(`.github/workflows/release.yml`),
    )

    this.fs.copy(
      this.templatePath(`README.md`),
      this.destinationPath(`.changeset/README.md`),
    )

    this.fs.copy(
      this.templatePath(`config.json`),
      this.destinationPath(`.changeset/config.json`),
    )

    this.addFields({
      scripts: {
        publish: `npm run build && changeset publish`,
      },
    })

    this.addDeps({ devDeps })
  }
}
