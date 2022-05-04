# Coverage Report

The coverage is an important tool when testing the stack. It allows us to quickly see which patches of codes are absolutely not tested, which is important to avoid. The current threshold is 70%, as having 100% is (for now) unrealistic and time consuming. It is a nice balance that must be maintainted to avoid dropping quality.

The coverage report works by running the tests and checking which lines, which functions, which conditions are being trigerred. If your test has code that touch a line, the line is considered covered. It allows us to quickly see if a line can hard crash a component or a function.

## Coverage is not an universal truth

We have to be careful to not consider the coverage as an answer to everything, and coverage is not infaillible. It will just check that a line has been ran, but it cannot check if a variable has a right value, or if a conditions has been fulfilled properly. It is important to not test for having coverage, but to test good cases that cover a lot of lines, with smart assertions at the end.

## Getting a coverage report

We have 2 ways of getting a coverage report: one locally and one with Sonarqube. Launching Jest locally will make you avoid having to wait for Sonarqube to trigger within the CI. We can get a coverage locally by using one of those 2 commands :

- `npm run jest:cov` -- Will start a full test run, with a coverage report at the end.
- `npm run jest <path/to/test> -- --coverage --collectCoverageFrom=<path/to/component>` -- Start a test run from a specific test file, and will report his coverage for the specific component

The first command works well to get a global view of the coverage, but with he size of the stack today, it is unrealistic to really use it. Your best bet will be to use the second command to check your tests individually against their component counterparts. One example would be :

- `npm run jest src/exercises/ex01/ex01.test.tsx -- --coverage --collectCoverageFrom=src/exercises/ex01/ex01.tsx`

This will run your battery of ex01 tests against the ex01 component, and can result in the following console output :

```bash
λ npm run jest src/exercises/ex01/ex01.test.tsx -- --coverage --collectCoverageFrom=src/exercises/ex01/ex01.tsx

> workshop-react-test@0.1.0 jest
> jest "src/exercises/ex01/ex01.test.tsx" "--coverage" "--collectCoverageFrom=src/exercises/ex01/ex01.tsx"

 PASS  src/exercises/ex01/ex01.test.tsx
  Ex01 : Basic rendering and testing
    √ should find in the Ex01 Component, the text: "Hello World !" (37 ms)
    √ should NOT find in the Ex01 Component, the text "This is not showing up !" (9 ms)
    √ should find in the Ex01 Component, the button "My bouton" (67 ms)
    √ should NOT find in the Ex01 Component, the a "My link" (4 ms)
    √ should find in the Ex01 Component, the div with data-testid "Test1" (4 ms)
    √ should NOT find in the Ex01 Component, the div with data-testid "Test2" (3 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |       50 |     100 |     100 |
 ex01.tsx |     100 |       50 |     100 |     100 | 5-9
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        2.09 s
Ran all test suites matching /src\\exercises\\ex01\\ex01.test.tsx/i.
```

Alongside your test result, the coverage array is now reported. It is divided as such :

- `File`: the file name,
- `Statements`: the differents statements of you code, which should amount to ~1 per line,
- `Branch`: the differents path of conditionals. For example, if you have a ternary like `isTrue ? foo() : bar()` but only test with `isTrue = true`, you will not get the full branch coverage.
- `Functions`: the coverage of functions, you need to call them all at least once,
- `Lines`: the lines themselves
- `Uncovered lines`: The lines that your tests did not test.

## Detailed coverage report locally

Last but not least, it is possible to get a detailed coverage like the one Sonarqube does locally ! To do so, start your coverage collection as usual. You can now find a static website generated directly within the stack ! It is located within the `coverage` folder, at the root of the project. Open the entry point `coverage/lcov-report/index.html`, and check what you're covering in great detail within !
