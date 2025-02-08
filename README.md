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
- jsr
- readme
- vscode
- yarnrc
- license
- tsconfig
- jsconfig
- editorconfig

### Linters

- biome
- cspell
- eslint
- publint
- ls-lint
- stylelint
- commitlint

### Services

- vercel
- renovate
- stackblitz

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
- vitepress
- changeset
- node-version
- sort-package-json

### Snippets

- utils
- vue-snippets

### Actions

- autofix-ci

## Usage

Install `yo` globally:

```shell
npm i -g yo
```

```shell
yarn global add yo
```

```shell
pnpm add yo --global
```

Install generator:

```shell
npm i -g generator-qxy
```

Use the generator:

```shell
# Run specifield generator
yo qxy:eslint
```

## Update

1. Reinstall generator globally:

```shell
npm i -g generator-qxy
```

2. Run `yo` to update generator interatively:

```shell
yo
```

## License

[MIT](./LICENSE) License © 2020-PRESENT [ntnyq](https://github.com/ntnyq)
