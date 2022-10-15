import { hasVite } from 'has-vite'
import BaseGenerator from '../base-generator.js'

export default class VitestGenerator extends BaseGenerator {
  writing () {
    const devDeps = [
      `vitest`,
      `@vitest/coverage-c8`,
    ]

    this.fs.copy(
      this.templatePath(`vite.config.ts.ejs`),
      hasVite(this.destinationPath())
        ? this.destinationPath(`vitest.config.ts`)
        : this.destinationPath(`vite.config.ts`),
    )

    this.addFields({
      scripts: {
        test: `vitest`,
        coverage: `vitest --coverage`,
      },
    })

    this.addDeps({ devDeps })
  }
}
