# Exercise 04

## Reducer and actions

Testing the reducer alongside the actions is something that is luckily very simple : we don't need the component, it is entirely logical, and since our actions are independant from each other, testing them one by one doesn't increase the complexity of our test file : it's very straightforward.

## Combine your elements into a test

In order to make your test, you'll need the right state, your action imported directly, and your reducer. Let's take this test :

```tsx
describe("Reducer", () => {
  it("should set a variable", () => {
    const action = setName("bar");
    const state = { name: "foo" };

    const result: any = reducer(state, action);

    expect(result.name).toBe("bar");
  });
});
```

This is all we need to have a complete test set. Let's break it down :

- Start by creating your action, with the required parameters if needed.
- Then, create your initial state. You don't need the entire state, only what is being affected by your action ! It makes the test clearer.
- Now, mix the two by calling your reducer with the initial state as your first parameter and your action with the second.
- The resulting variable is your finalized state ! You can now test away !

This is basically how Redux works, with this state saved somewhere so you can pull it later !

## An important note about Reducers

Reducers will compare the old and new object, and will need a completely new object to render the variables it contains again. What this means is :

```tsx
const reducer = (state = initialState, action: any) => {
  state.foo = "new stuff";

  return state;
};
```

This will NOT trigger another render, because the state signature is still the same. What you need to do in order to trigger a render is to create a new object based on the old state, like so :

```tsx
const reducer = (state = initialState, action: any) => {
  return { ...state, foo: "new stuff" };
};
```

With the new signature, now it will retrigger. This is also useful if your component needs to NOT rerender, but need a reducer check. Simply return `state` and it will not rerender: the signature is the same.
