## `esbuild-jest` bug

Run `npm install` then `npm test`

The import of a `.mjs` file causes an issue where the imported value is the source code as a string, and not the executed module.
