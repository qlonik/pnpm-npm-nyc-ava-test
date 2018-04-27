# NYC and NPM installed locally

When those are installed locally, nyc is trying to instrument the shell file created
in the `node_modules/.bin` folder by pnpm.

Right now in the repo, `pnpm run test` will pass.

However, after installing npm (`pnpm i npm@5`), `pnpm run test` fails with error:

```
/home/qlonik/pnpm-npm-nyc-ava-test/node_modules/.bin/npm:2
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")
          ^^^^^^^

SyntaxError: missing ) after argument list
    at new Script (vm.js:51:7)
    at createScript (vm.js:136:10)
    at runInThisContext (vm.js:197:10)
    at Object.vm.runInThisContext (/home/qlonik/pnpm-npm-nyc-ava-test/node_modules/.registry.npmjs.org/nyc/11.7.1/node_modules/nyc/node_modules/istanbul-lib-hook/lib/hook.js:142:16)
    at Module._compile (internal/modules/cjs/loader.js:618:28)
    at Module.replacementCompile (/home/qlonik/pnpm-npm-nyc-ava-test/node_modules/.registry.npmjs.org/nyc/11.7.1/node_modules/nyc/node_modules/append-transform/index.js:58:13)
    at module.exports (/home/qlonik/pnpm-npm-nyc-ava-test/node_modules/.registry.npmjs.org/nyc/11.7.1/node_modules/nyc/node_modules/default-require-extensions/js.js:8:9)
    at Object.<anonymous> (/home/qlonik/pnpm-npm-nyc-ava-test/node_modules/.registry.npmjs.org/nyc/11.7.1/node_modules/nyc/node_modules/append-transform/index.js:62:4)
    at Module.load (internal/modules/cjs/loader.js:566:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:506:12)
```

Also, replacing the script `test` from current to be
`nyc pnpx -n \"$NODE_DEBUG_OPTION\" ava` (i.e. the content of script `test:ava`), passes the test.
