import BaseGenerator from '../base-generator'

export default class BiomeGenerator extends BaseGenerator {
  writing() {
    this.addFields({
      scripts: {
        check: 'biome check --write',
        format: 'biome format --write',
      },
    })

    this.addDeps({ devDeps: ['@biomejs/biome'] })

    this.fs.copy(this.templatePath('biome.json'), this.destinationPath('biome.json'))
  }
}
