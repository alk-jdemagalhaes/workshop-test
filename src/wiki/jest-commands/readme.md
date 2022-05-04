# Jest commands

It is always useful to know what Jest is capable of, and a good knowledge of what Jest can do might save you a lot of time ! Below will be a little cheat sheet of useful Jest commands combined with npm that will run inside the front-productstream.

Sometimes you will see `npx` instead of `npm`. `npx` is `npm` firing an executable from his `node_modules`: because we don't have all the commands inside the `package.json`, we sometimes need to do it by hand for specific use cases.

## Basics

- `npm run jest` -- Will start a full test run. Run this and grab a coffee.
- `npm run jest -- <relative/path/to/file/or/folder>` -- Will start a test run wherever you lead the path. If it is a file, it will seek tests inside the file. If it is a folder, it will seek tests recursively inside the folder.
- `npm run jest:watch` -- Will start a console client that watches file changes and try to test changed tests.
- `npm run jest:changed` -- Will start a run with only changed (uncommited) files.
- `npm run jest:branch` -- Will start a test run with changes from staging.
- `npm run jest:last` -- Will start a test run with changes from the last commit.

## Coverage

- `npm run jest:cov` -- Will start a full test run, with a coverage report at the end.
- `npm run jest <path/to/test> -- --coverage --collectCoverageFrom=<path/to/component>` -- Start a test run from a specific test file, and will report his coverage for the specific component
