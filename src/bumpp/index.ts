import BaseGenerator from '../base-generator'

export default class BumppGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('release.yml'),
      this.destinationPath('.github/workflows/release.yml'),
    )

    this.addFields({
      scripts: {
        release: 'run-s release:check release:version',
        'release:check': 'run-s lint typecheck test',
        'release:version': 'bumpp',
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({ devDeps: ['bumpp', 'npm-run-all2'] })
  }
}
