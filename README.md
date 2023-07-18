# next.config.mjs Issue Example Repo

This repo is a minimal reproduction of an issue I'm having with `next.config.mjs`.

Importing a function from another local file and running within `next.config.mjs` causes the following error:

```
Cannot find module 'apps/example/lib/functions' imported from apps/example/next.config.mjs
example:build:     at new NodeError (node:internal/errors:399:5)
example:build:     at finalizeResolution (node:internal/modules/esm/resolve:231:11)
example:build:     at moduleResolve (node:internal/modules/esm/resolve:850:10)
example:build:     at defaultResolve (node:internal/modules/esm/resolve:1058:11)
example:build:     at nextResolve (node:internal/modules/esm/loader:163:28)
example:build:     at ESMLoader.resolve (node:internal/modules/esm/loader:835:30)
example:build:     at ESMLoader.getModuleJob (node:internal/modules/esm/loader:416:18)
example:build:     at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:40)
example:build:     at link (node:internal/modules/esm/module_job:75:36) {
example:build:   code: 'ERR_MODULE_NOT_FOUND'
example:build: }
example:build: error Command failed with exit code 1.
example:build: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
example:build: ERROR: command finished with error: command (apps/example) yarn run build exited (1)
command (apps/example) yarn run build exited (1)
```

Defining the same function locally within `next.config.js` works fine.

## Reproduction steps

1. `yarn`
2. `yarn dev` or `yarn build`

## Relevant files

- [next.config.mjs](https://github.com/misikoff/next.config.mjs-issue/blob/main/apps/example/next.config.mjs)
- [local function file](https://github.com/misikoff/next.config.mjs-issue/blob/main/apps/example/lib/functions.ts)
