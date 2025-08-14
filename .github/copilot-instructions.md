# Copilot Instructions for generator-qxy

## Project Overview

This is a Yeoman generator collection that scaffolds development tools and configurations for the qxy team. Each generator is a micro-tool that installs specific dev tooling (ESLint, Prettier, Husky, etc.) with opinionated configurations.

## Architecture Patterns

### Generator Structure

- **Base Class**: All generators extend `BaseGenerator` from `src/base-generator.ts`
- **File Organization**: Each generator lives in `src/{tool-name}/` with `index.ts` and optional `templates/` folder
- **Output**: TypeScript compiles to `generators/` directory (the published structure)

### Key BaseGenerator Methods

```typescript
// Package.json manipulation
this.addFields({ scripts: { lint: 'eslint' } })
this.addDeps({ deps: ['react'], devDeps: ['eslint'] })

// VSCode settings integration
this.extendVSCodeSettings({ 'eslint.enable': true })

// Template copying
this.fs.copy(this.templatePath('config.js'), this.destinationPath('config.js'))
```

### Dependency Resolution Pattern

- Uses `getPackageVersion()` to fetch latest npm versions dynamically
- In tests, returns `^0.0.0` for speed (controlled by `NODE_ENV=test`)
- Pins versions for non-latest packages (those with `@` but not org scoped)

## Build & Development Workflow

### Build Process

```bash
npm run build    # tsdown compiles TS → JS + copies templates
npm run copy     # copyfiles moves templates to generators/
npm run dev      # watch mode during development
```

### Testing Philosophy

- Each generator has a corresponding test in `tests/{tool}.test.ts`
- Uses custom `@generator-qxy/tester` package for streamlined Yeoman testing
- Tests verify file creation and package.json modifications
- Test pattern: `run({ generator: 'path', file: ['config.js'], jsonFileContent: [{ filename: 'package.json', content: {...} }] })`

### Template Handling

- Templates live in `src/{generator}/templates/`
- Build process copies them to `generators/{generator}/templates/`
- Use `this.templatePath()` and `this.destinationPath()` for file operations

## Project-Specific Conventions

### Generator Naming

- Generator folders use kebab-case: `auto-fix-ci`, `node-version`
- Class names use PascalCase: `AutoFixCIGenerator`, `NodeVersionGenerator`
- Yeoman invocation: `yo qxy:eslint`, `yo qxy:auto-fix-ci`

### Configuration Philosophy

- Opinionated configs that reference `@ntnyq/` scoped packages for consistency
- VSCode integration is first-class - most generators extend `.vscode/settings.json`
- Package.json sorting via `sort-package-json` happens automatically in main app generator

### Monorepo Structure

- Main package exports at root level (`generators/app/index.js`)
- Helper package `@generator-qxy/tester` in `packages/tester/`
- All TypeScript, targeting ES2022/Node18

## Key Integration Points

### Package Management

- Uses npm for version resolution (`npm show {pkg} version`)
- Supports both string deps and `{ name: string, tag: string }` format
- Automatically prefixes versions with `^` unless version is pinned

### VSCode Integration

- Most generators add relevant VSCode settings
- Common pattern: enable tool, set formatters, configure code actions
- Settings merge with existing `.vscode/settings.json`

### File System Operations

- Prefer `this.fs.extendJSON()` over manual JSON manipulation
- Use `this.appendToFile()` for incremental file modifications
- Template copying preserves directory structure

When adding new generators, follow the established pattern: extend BaseGenerator, implement `writing()` method, add dependencies, copy templates, and create corresponding test.
