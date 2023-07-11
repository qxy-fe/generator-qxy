import BaseGenerator from '../base-generator'

export default class VercelGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(this.templatePath('vercel.json'), this.destinationPath('vercel.json'))
  }
}
