import BaseGenerator from '../base-generator'

export default class VitePressGenerator extends BaseGenerator {
  write() {
    const targetDir = 'docs'

    this.fs.copy(
      this.templatePath('index.md'),
      this.destinationPath(targetDir, 'index.md'),
    )
    this.fs.copy(
      this.templatePath('.vitepress/config.ts.ejs'),
      this.destinationPath(targetDir, '.vitepress/config.ts'),
    )
    this.fs.copy(
      this.templatePath('.vitepress/config/head.ts.ejs'),
      this.destinationPath(targetDir, '.vitepress/config/head.ts'),
    )
    this.fs.copy(
      this.templatePath('.vitepress/config/theme.ts.ejs'),
      this.destinationPath(targetDir, '.vitepress/config/theme.ts'),
    )

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({
      devDeps: ['vitepress'],
    })

    this.addFields({
      scripts: {
        'docs:dev': `vitepress dev ${targetDir}`,
        'docs:build': `vitepress build ${targetDir}`,
      },
    })
  }
}
