import BaseGenerator from '../base-generator.js'

export default class VitestGenerator extends BaseGenerator {
  writing () {
    const devDeps = [
      `vitest`,
      `@vitest/coverage-c8`,
    ]

    this.fs.copy(
      this.templatePath(`vite.config.ts.ejs`),
      this.destinationPath(`vite.config.ts`),
    )

    this.addFields({
      test: `vitest`,
      coverage: `vitest --coverage`,
    })

    this.addDeps({ devDeps })
  }
}
