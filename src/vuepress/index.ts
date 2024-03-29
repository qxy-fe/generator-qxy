import BaseGenerator from '../base-generator'

export default class VuepressGenerator extends BaseGenerator {
  writing() {
    this.fs.copy(
      this.templatePath('config.ts.ejs'),
      this.destinationPath('docs/.vuepress/config.ts'),
    )

    this.fs.copy(this.templatePath('README.md'), this.destinationPath('docs/README.md'))

    this.addFields({
      scripts: {
        'dev:docs': 'vuepress dev docs',
        'build:docs': 'vuepress build docs',
      },
    })

    // ==================
    // Add devDependencies
    // ==================
    this.addDeps({
      devDeps: [
        'vue',
        {
          name: 'vuepress',
          tag: 'next',
        },
        {
          name: '@vuepress/bundler-vite',
          tag: 'next',
        },
        {
          name: '@vuepress/theme-default',
          tag: 'next',
        },
      ],
    })
  }
}
