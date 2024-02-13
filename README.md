# Up Bank - Coding Challenge
This repo was created via `create-react-app`.

A lot of the guts of create-react-app have been kept as I wanted to focus getting the logic working in the 2 hour allocation.

Nodejs version used to develop this was `21.6.1`.

To get this running locally, run the following commands:

```
yarn install
yarn start
```

To run tests, run:

```
yarn test
```

What I would have liked to improve on if I had more than two hours:

- Properly implement `jest` to ensure component-level code behaves as expected
- Implement `prettier` for linting purposes
- Implemented MUCH better error handling on the fields presented to the user (e.g. built an input component)
- On top of the above, implement number fields that the user can enter numbers in
- Also implement more validation on the functions in `calculator.ts` 
- Created more tests around the input validation side of things to ensure they worked as expected
- Fix the dependency issues in package.json around babel and create-react-app