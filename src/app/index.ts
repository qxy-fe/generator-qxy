import { createRequire } from 'node:module'
import BaseGenerator from '../base-generator'

const require = createRequire(import.meta.url)

export default class QxyGenerator extends BaseGenerator {
  install() {
    this.spawnSync('node', [
      require.resolve('sort-package-json'),
      this.destinationPath('package.json'),
    ])
  }
}
