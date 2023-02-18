import { createRequire } from 'node:module'
import BaseGenerator from '../base-generator.js'

const require = createRequire(import.meta.url)

export default class QxyGenerator extends BaseGenerator {
  protected props: {
    // Meta files
    editorconfig: boolean
    readme: boolean
    git: boolean
    vscode: boolean
    jsconfig: boolean
    tsconfig: boolean

    // Dev Workflow
    svgo: boolean
    husky: boolean
    yarnrc: boolean

    cSpell: boolean
    eslint: boolean
    lsLint: boolean
    publint: boolean
    stylelint: boolean
    commitlint: boolean

    bumpp: boolean
    turbo: boolean
    vercel: boolean
    vitest: boolean
    license: boolean
    renovate: boolean
    prettier: boolean
    vuepress: boolean
    lintStaged: boolean
    nanoStaged: boolean
    sortPackageJson: boolean
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: 'checkbox',
        name: 'meta',
        message: 'Select meta files you want to initialize',
        choices: [
          { name: 'VsCode settings', value: 'vscode' },
          { name: 'Editor config', value: 'editorconfig' },
          { name: 'README.md', value: 'readme' },
          { name: 'Git Meta files', value: 'git' },
          { name: 'JavaScript config', value: 'jsconfig' },
          { name: 'TypeScript config', value: 'tsconfig' },
        ],
        default: ['vscode', 'editorconfig', 'readme', 'git'],
      },
      {
        type: 'checkbox',
        name: 'workflow',
        message: 'Select development workflow you want too initialize',
        choices: [
          { name: 'Husky', value: 'husky' },
          { name: 'ESLint', value: 'eslint' },
          { name: 'Publint', value: 'publint' },
          { name: 'Stylelint', value: 'stylelint' },
          { name: 'Prettier', value: 'prettier' },
          { name: 'Lint staged', value: 'lint-staged' },
          { name: 'Nano staged', value: 'nano-staged' },
          { name: 'CommitLint', value: 'commitlint' },
          { name: 'VuePress docs', value: 'vuepress' },
          { name: 'Code Spell Check', value: 'cspell' },
          { name: 'Files & Directories Lint', value: 'ls-lint' },
          { name: 'Sort package.json', value: 'sort-package-json' },
          { name: 'SVGO', value: 'svgo' },
          { name: 'Vitest', value: 'vitest' },
          { name: 'Renovate', value: 'renovate' },
          { name: 'Bumpp', value: 'bumpp' },
          { name: 'License', value: 'license' },
          { name: 'Yarnrc', value: 'yarnrc' },
          { name: 'Turbo', value: 'turbo' },
          { name: 'Vercel', value: 'vercel' },
        ],
        default: [
          'bumpp',
          'husky',
          'cspell',
          'vitest',
          'license',
          'eslint',
          'publint',
          'renovate',
          'stylelint',
          'prettier',
          'ls-lint',
          'commitlint',
          'lint-staged',
          'sort-package-json',
        ],
      },
    ])

    this.props = {
      // Meta files
      editorconfig: answers.meta.includes('editorconfig'),
      readme: answers.meta.includes('readme'),
      git: answers.meta.includes('git'),
      vscode: answers.meta.includes('vscode'),
      jsconfig: answers.meta.includes('jsconfig'),
      tsconfig: answers.meta.includes('tsconfig'),

      // Dev workflow
      svgo: answers.workflow.includes('svgo'),
      turbo: answers.workflow.includes('turbo'),
      bumpp: answers.workflow.includes('bumpp'),
      husky: answers.workflow.includes('husky'),
      yarnrc: answers.workflow.includes('yarnrc'),
      vercel: answers.workflow.includes('vercel'),
      cSpell: answers.workflow.includes('cspell'),
      eslint: answers.workflow.includes('eslint'),
      vitest: answers.workflow.includes('vitest'),
      license: answers.workflow.includes('license'),
      renovate: answers.workflow.includes('renovate'),
      stylelint: answers.workflow.includes('stylelint'),
      lsLint: answers.workflow.includes('ls-lint'),
      publint: answers.workflow.includes('publint'),
      prettier: answers.workflow.includes('prettier'),
      vuepress: answers.workflow.includes('vuepress'),
      lintStaged: answers.workflow.includes('lint-staged'),
      nanoStaged: answers.workflow.includes('nano-staged'),
      commitlint: answers.workflow.includes('commitlint'),
      sortPackageJson: answers.workflow.includes('sort-package-json'),
    }
  }

  default() {
    // ==================================
    // meta files
    // ==================================
    if (this.props.git) {
      this.composeWith(require.resolve('../git/index.js'))
    }

    if (this.props.yarnrc) {
      this.composeWith(require.resolve('../yarnrc/index.js'))
    }

    if (this.props.editorconfig) {
      this.composeWith(require.resolve('../editorconfig/index.js'))
    }

    if (this.props.readme) {
      this.composeWith(require.resolve('../readme/index.js'), {
        username: this.user.git.name(),
        projectName: '',
        projectDesc: '',
        package: false,
      })
    }

    if (this.props.vscode) {
      this.composeWith(require.resolve('../vscode/index.js'))
    }

    if (this.props.jsconfig) {
      this.composeWith(require.resolve('../jsconfig/index.js'))
    }

    if (this.props.tsconfig) {
      this.composeWith(require.resolve('../tsconfig/index.js'))
    }

    // ==================================
    // workflow
    // ==================================
    if (this.props.prettier) {
      this.composeWith(require.resolve('../prettier/index.js'), {
        sharedConfig: '@qxy/prettier-config',
      })
    }

    if (this.props.husky) {
      this.composeWith(require.resolve('../husky/index.js'), {
        commitlint: this.props.commitlint,
        lintStaged: this.props.lintStaged,
        nanoStaged: this.props.nanoStaged,
      })
    }

    if (this.props.svgo) {
      this.composeWith(require.resolve('../svgo/index.js'))
    }

    if (this.props.turbo) {
      this.composeWith(require.resolve('../turbo/index.js'))
    }

    if (this.props.vercel) {
      this.composeWith(require.resolve('../vercel/index.js'))
    }

    if (this.props.bumpp) {
      this.composeWith(require.resolve('../bumpp/index.js'))
    }

    if (this.props.cSpell) {
      this.composeWith(require.resolve('../cspell/index.js'))
    }

    if (this.props.eslint) {
      this.composeWith(require.resolve('../eslint/index.js'))
    }

    if (this.props.publint) {
      this.composeWith(require.resolve('../publint/index.js'))
    }

    if (this.props.stylelint) {
      this.composeWith(require.resolve('../stylelint/index.js'))
    }

    if (this.props.lsLint) {
      this.composeWith(require.resolve('../ls-lint/index.js'))
    }

    if (this.props.vitest) {
      this.composeWith(require.resolve('../vitest/index.js'))
    }

    if (this.props.license) {
      this.composeWith(require.resolve('../license/index.js'))
    }

    if (this.props.renovate) {
      this.composeWith(require.resolve('../renovate/index.js'))
    }

    if (this.props.lintStaged) {
      this.composeWith(require.resolve('../lint-staged/index.js'))
    }

    if (this.props.nanoStaged) {
      this.composeWith(require.resolve('../nano-staged/index.js'))
    }

    if (this.props.vuepress) {
      this.composeWith(require.resolve('../vuepress/index.js'))
    }

    if (this.props.commitlint) {
      this.composeWith(require.resolve('../commitlint/index.js'))
    }

    if (this.props.sortPackageJson) {
      this.composeWith(require.resolve('../sort-package-json/index.js'))
    }
  }

  install() {
    this.spawnCommandSync('node', [
      require.resolve('sort-package-json'),
      this.destinationPath('package.json'),
    ])
  }
}
