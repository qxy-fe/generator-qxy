# generator-qxy

[![CI](https://github.com/qxy-fe/generator-qxy/workflows/CI/badge.svg)](https://github.com/qxy-fe/generator-qxy/actions)
[![NPM VERSION](https://img.shields.io/npm/v/generator-qxy.svg)](https://www.npmjs.com/package/generator-qxy)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/generator-qxy.svg)](https://www.npmjs.com/package/generator-qxy)
[![LICENSE](https://img.shields.io/github/license/qxy-fe/generator-qxy.svg)](https://github.com/qxy-fe/generator-qxy/blob/main/LICENSE)

> 🤟 Yeoman generator for scaffold project of qxy team.

## Feature

Supported generators:

### Meta

- git
- readme
- vscode
- yarnrc
- license
- tsconfig
- jsconfig
- editorconfig

### Linter

- cspell
- eslint
- publint
- ls-lint
- stylelint
- commitlint

### Service

- vercel
- renovate

### Tool

- svgo
- bumpp
- turbo
- vitest
- husky
- lint-staged
- nano-staged
- prettier
- vuepress
- changeset
- sort-package-json

## Usage

Install `yo` globally:

```sh
$ npm i -g yo
# OR
$ yarn global add yo
```

Install generator:

```sh
$ npm i -g generator-qxy
```

Use the generator:

```sh
$ yo qxy

# Run specifield generator
$ yo qxy:eslint
```

## Update

1. Reinstall generator globally:

```
$ npm i -g generator-qxy
```

2. Run `yo` to update generator interatively:

```sh
$ yo
```

## License

[MIT](./LICENSE) License © 2020-PRESENT [ntnyq](https://github.com/ntnyq)
