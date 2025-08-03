# Limeroad Frontend Applications

## About
Frontend monorepo using [Turborepo](https://turborepo.org) and contains:

```text
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users

apps
  ├─ mobile
  |   ├─ Expo SDK 53 (EXPERIMENTAL)
  |   |   >[!WARNING] 
  |   |   > Using Expo SDK 53 (canary) to unblock Next.js 15 / React 19 support.
  |   |   > This is experimental and might not work as expected.
  |   ├─ React Native using React 19
  |   └─ Navigation using Expo Router
  └─ web
      ├─ Next.js 15
      └─ React 19
      |_ React native web

packages
  └─ core
      └─ shared js related core utilities, libraries
  └─ features
      └─ shared features, components, hooks, etc. that are used in both apps
  └─ services
      └─ shared services, APIs, etc. that are used in both apps
  └─ types
      └─ shared types, interfaces, etc. that are used in both apps
  └─ ui
      └─ shared cross components, primitives and design system using react-strict-dom

tooling
  ├─ babel
  |   └─ shared babel configuration
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ postcss
  |   └─ shared postcss configuration
  ├─ prettier
  |   └─ shared prettier configuration
  └─ typescript
      └─ shared tsconfig you can extend from
```

> We use `@app` as a placeholder for package names.

## Quick Start

To get it running, follow the steps below:

> [!NOTE]
>
> Make sure to follow the system requirements specified in [`package.json#engines`](./package.json#L6) before proceeding.

### 1. Setup dependencies

```bash
# Install dependencies
1. pnpm i

2. Run `pnpm dev` at the project root folder.
```

### When it's time to add a new package

To add a new package, simply run `pnpm turbo gen init` in the monorepo root. This will prompt you for a package name as well as if you want to install any dependencies to the new package (of course you can also do this yourself later).

The generator sets up the `package.json`, `tsconfig.json` and a `index.ts`, as well as configures all the necessary configurations for tooling around your package such as formatting, linting and typechecking. When the package is created, you're ready to go build out the package.

### When it's time to add a new component from [gluestack](https://gluestack.io/ui/docs/components/box)
```bash
cd packages/ui

npx gluestack-ui@latest add <component-name>
```

### Deployment on staging
To deploy the web app on staging, run the following command:

ssh into rails8 server and run:

```bash
cd frontend/apps/web
./deploy.sh stage
```
