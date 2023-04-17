# generator-qxy

[![CI](https://github.com/qxy-fe/generator-qxy/workflows/CI/badge.svg)](https://github.com/qxy-fe/generator-qxy/actions)
[![NPM VERSION](https://img.shields.io/npm/v/generator-qxy.svg)](https://www.npmjs.com/package/generator-qxy)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/generator-qxy.svg)](https://www.npmjs.com/package/generator-qxy)
[![LICENSE](https://img.shields.io/github/license/qxy-fe/generator-qxy.svg)](https://github.com/qxy-fe/generator-qxy/blob/main/LICENSE)

> 🤟 Yeoman generator for scaffold project of qxy team.

## Features

Supported generators:

### Metas

- git
- readme
- vscode
- yarnrc
- license
- tsconfig
- jsconfig
- editorconfig

### Linters

- cspell
- eslint
- publint
- ls-lint
- stylelint
- commitlint

### Services

- vercel
- renovate

### Tools

- svgo
- bumpp
- turbo
- husky
- unocss
- vitest
- lint-staged
- nano-staged
- prettier
- vuepress
- changeset
- sort-package-json

### Snippets

- utils

## Usage

Install `yo` globally:

```bash
npm i -g yo
```

```bash
yarn global add yo
```

```bash
pnpm add yo --global
```

Install generator:

```bash
npm i -g generator-qxy
```

Use the generator:

```bash
yo qxy

# Run specifield generator
yo qxy:eslint
```

## Update

1. Reinstall generator globally:

```bash
npm i -g generator-qxy
```

2. Run `yo` to update generator interatively:

```bash
yo
```

## License

[MIT](./LICENSE) License © 2020-PRESENT [ntnyq](https://github.com/ntnyq)
