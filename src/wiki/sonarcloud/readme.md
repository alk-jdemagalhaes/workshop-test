# Sonarcloud

When requesting a pull request in our stack, you will be met by Sonarcloud, a powerful CI tool.

![](https://i.imgur.com/ZoodIqk.png)

It will control your code quality as well as the code coverage. This is what he's going to check :

- Bugs : A coding mistake that will cause disrepancy or crash in the app
- Vulnerabilities : Code that can be exploited by mean people using flawed methods
- Security hotspots : Sensitive code that need to be manually reviewed to check if it can be exploited
- Code Smells : Confusing code that goes against the usual syntax of a clean code

You should always try to fix any of these errors.

- Coverage : What percent of new code is being covered by tests
- Duplication : What percent of new code is something that is being duplicated from somewhere else. It will ignore duplications that are smaller than 3 lines.

You should have no duplications and at least 70% coverage.

## Sonarcloud interface

When inspecting sonarcloud, you'll see a powerful interface to inspect where you code needs to be improved in quality. An example :

![](https://i.imgur.com/1F5l761.png)

Here, you can filter by Code Smells because there is 2 in the PR. Then, you can check whether or not it is something Minor or Major, how much time it should take to fix the smell, and you can assign people to fix it if needed (the owner of the PR is by default the maintainter of that).

## Checking coverage

You will mainly use Sonarcloud to check how your coverage is doing.

![](https://i.imgur.com/dx9Adhv.png)

You can see for every file how much coverage has been dones, and what needs to be done for lines and conditions to cover them. Here, we can see different informations :

- The green lines mean that our statement is being covered : we are calling this and running this in our tests.
- The red line means it is not being covered : we are not running this in our tests. We should aim to fix that.
- The red and whitish-red line means it is partially covered : not all conditions are being run in our test. We should aim to fix that by running a test for both conditions.

Don't hesistate to play around Sonarcloud to have a lot of neat infos about our app !
