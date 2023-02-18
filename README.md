# generator-qxy

[![CI](https://github.com/qxy-fe/generator-qxy/workflows/CI/badge.svg)](https://github.com/qxy-fe/generator-qxy/actions)
[![NPM VERSION](https://img.shields.io/npm/v/generator-qxy.svg)](https://www.npmjs.com/package/generator-qxy)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/generator-qxy.svg)](https://www.npmjs.com/package/generator-qxy)
[![LICENSE](https://img.shields.io/github/license/qxy-fe/generator-qxy.svg)](https://github.com/qxy-fe/generator-qxy/blob/main/LICENSE)

> 🤟 Yeoman generator for scaffold project of qxy team.

## Feature

Supported generators:

- svgo
- bumpp
- turbo
- vitest
- vscode
- cspell
- yarnrc
- vercel
- tsconfig
- jsconfig
- prettier
- vuepress
- editorconfig
- sort-package-json

### Git Flow

- git
- husky
- commitlint
- lint-staged
- nano-staged

### Linters

- stylelint
- eslint
- publint
- ls-lint

### Auto runner

- renovate
- changeset

### Misc

- readme

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
