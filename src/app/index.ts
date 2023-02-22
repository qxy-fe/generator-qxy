import { createRequire } from 'node:module'
import type { Questions } from 'yeoman-generator'
import BaseGenerator from '../base-generator.js'

const require = createRequire(import.meta.url)

export default class QxyGenerator extends BaseGenerator {
  protected props: {
    // Meta
    git: boolean
    readme: boolean
    vscode: boolean
    yarnrc: boolean
    license: boolean
    jsconfig: boolean
    tsconfig: boolean
    editorconfig: boolean

    // Linter
    cSpell: boolean
    eslint: boolean
    lsLint: boolean
    publint: boolean
    stylelint: boolean
    commitlint: boolean

    // Third party service
    vercel: boolean
    renovate: boolean

    // Tool
    svgo: boolean
    husky: boolean
    bumpp: boolean
    turbo: boolean
    vitest: boolean
    prettier: boolean
    vuepress: boolean
    lintStaged: boolean
    nanoStaged: boolean
    sortPackageJson: boolean
  }

  protected questions: Questions = [
    {
      type: 'checkbox',
      name: 'meta',
      message: 'Select meta files you wanna:',
      choices: [
        { name: 'Git Meta files', value: 'git' },
        { name: 'README.md', value: 'readme' },
        { name: 'VS Code settings', value: 'vscode' },
        { name: 'Yarnrc', value: 'yarnrc' },
        { name: 'License', value: 'license' },
        { name: 'JavaScript config', value: 'jsconfig' },
        { name: 'TypeScript config', value: 'tsconfig' },
        { name: 'Editorconfig', value: 'editorconfig' },
      ],
      default: ['git', 'readme', 'license', 'vscode', 'tsconfig', 'editorconfig'],
    },
    {
      type: 'checkbox',
      name: 'linter',
      message: 'Select linters you wanna:',
      choices: [
        { name: 'ESLint', value: 'eslint' },
        { name: 'Publint', value: 'publint' },
        { name: 'Stylelint', value: 'stylelint' },
        { name: 'CommitLint', value: 'commitlint' },
        { name: 'Code Spell Check', value: 'cspell' },
        { name: 'Files & Directories Lint', value: 'ls-lint' },
      ],
      default: ['eslint'],
    },
    {
      type: 'checkbox',
      name: 'service',
      message: 'Select services you wanna:',
      choices: [
        { name: 'Vercel', value: 'vercel' },
        { name: 'Renovate', value: 'renovate' },
      ],
      default: ['renovate'],
    },
    {
      type: 'checkbox',
      name: 'tool',
      message: 'Select tools you wanna:',
      choices: [
        { name: 'Husky', value: 'husky' },
        { name: 'Prettier', value: 'prettier' },
        { name: 'Lint staged', value: 'lint-staged' },
        { name: 'Nano staged', value: 'nano-staged' },
        { name: 'VuePress docs', value: 'vuepress' },
        { name: 'SVGO', value: 'svgo' },
        { name: 'Vitest', value: 'vitest' },
        { name: 'Bumpp', value: 'bumpp' },
        { name: 'Turbo', value: 'turbo' },
        { name: 'Sort package.json', value: 'sort-package-json' },
      ],
      default: ['bumpp', 'husky', 'vitest', 'prettier', 'nano-staged'],
    },
  ]

  async prompting() {
    const answers = await this.prompt(this.questions)

    this.props = {
      // Meta
      git: answers.meta.includes('git'),
      readme: answers.meta.includes('readme'),
      yarnrc: answers.meta.includes('yarnrc'),
      vscode: answers.meta.includes('vscode'),
      license: answers.meta.includes('license'),
      jsconfig: answers.meta.includes('jsconfig'),
      tsconfig: answers.meta.includes('tsconfig'),
      editorconfig: answers.meta.includes('editorconfig'),

      // Linter
      cSpell: answers.lint.includes('cspell'),
      eslint: answers.lint.includes('eslint'),
      stylelint: answers.lint.includes('stylelint'),
      lsLint: answers.lint.includes('ls-lint'),
      publint: answers.lint.includes('publint'),
      commitlint: answers.lint.includes('commitlint'),

      // Service
      vercel: answers.service.includes('vercel'),
      renovate: answers.service.includes('renovate'),

      // Tool
      svgo: answers.tool.includes('svgo'),
      turbo: answers.tool.includes('turbo'),
      bumpp: answers.tool.includes('bumpp'),
      husky: answers.tool.includes('husky'),
      vitest: answers.tool.includes('vitest'),
      prettier: answers.tool.includes('prettier'),
      vuepress: answers.tool.includes('vuepress'),
      lintStaged: answers.tool.includes('lint-staged'),
      nanoStaged: answers.tool.includes('nano-staged'),
      sortPackageJson: answers.tool.includes('sort-package-json'),
    }
  }

  default() {
    // ==================================
    // Meta
    // ==================================
    if (this.props.git) {
      this.composeWith(require.resolve('../git/index.js'))
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

    if (this.props.yarnrc) {
      this.composeWith(require.resolve('../yarnrc/index.js'))
    }

    if (this.props.license) {
      this.composeWith(require.resolve('../license/index.js'))
    }

    if (this.props.editorconfig) {
      this.composeWith(require.resolve('../editorconfig/index.js'))
    }

    if (this.props.jsconfig) {
      this.composeWith(require.resolve('../jsconfig/index.js'))
    }

    if (this.props.tsconfig) {
      this.composeWith(require.resolve('../tsconfig/index.js'))
    }

    // ==================================
    // Linter
    // ==================================

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

    if (this.props.commitlint) {
      this.composeWith(require.resolve('../commitlint/index.js'))
    }

    // ==================================
    // Service
    // ==================================

    if (this.props.vercel) {
      this.composeWith(require.resolve('../vercel/index.js'))
    }

    if (this.props.renovate) {
      this.composeWith(require.resolve('../renovate/index.js'))
    }

    // ==================================
    // Tool
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

    if (this.props.bumpp) {
      this.composeWith(require.resolve('../bumpp/index.js'))
    }

    if (this.props.vitest) {
      this.composeWith(require.resolve('../vitest/index.js'))
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
