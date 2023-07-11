import BaseGenerator from '../base-generator'

export default class PublintGenerator extends BaseGenerator {
  writing() {
    const devDeps = ['publint']

    this.addFields({
      scripts: {
        'lint:pkg': 'publint',
      },
    })

    this.addDeps({ devDeps })
  }
}
