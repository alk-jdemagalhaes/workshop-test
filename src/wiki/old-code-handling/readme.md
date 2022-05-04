# Old Code Handling

If you work with well established modules within the stack, there is a non negligible chance that you will have to add tests to components that have been tested in the old ways. How do we do to handle this ?

## Remove snapshots

One of the first things you can do is to remove the snapshots, as this is a very outdated method of testing. While easy to create, the maintainance is usually a pain and they're not worth keeping around : the tests should be covering the cases well enough. Simply delete the test creating the snapshot, and should you run Jest, you will be prompted to update the snapshot (remove it) using a specific command.

## Remove ImmutableJS

If you can, try to remove any instances of ImmutableJS that you can, that won't break other components.

## Start using the testing library

While you don't have to replace the test right away, it is possible for Enzyme (the old component renderer) and the testing library to work within the same test file. Simply start using the new method in your new tests, and keep the old tests as they are.

## Remove Enzyme gradually, and replace its utils by testing library methods

If you can, it is now the time to update the old tests against the new method. Replace Enzyme by `@testing-library/react` `render()` method, identify what the test does and replicate the method with methods from the testing library. For example, if we checked for a specific div to be present, replace the method Enzyme use for a `getBy`, adding a `data-testid` if you cannot find a way to target the div

## No need to overdo it

Old tests are working fine alongside the new ones, if you're facing too much issues converting old to new, don't hesitate to ask for help, or to skip the refactoring. The code is still covered !
