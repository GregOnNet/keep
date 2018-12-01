# Keep
> Demo of the talk [NgRx Refactoring Patterns]()

## Features

- [Lerna](https://lernajs.io/) is used to setup the Mono Repository  
- [Angular](https://angular.io) Client
- [NestJS](https://nestjs.com) API
- [NgRx](https://ngrx.io) handles state

## Setup

In this project yarn is used instead of npm.
To install packages and run commands you will see the yarn commands.
Of cause you are free to use npm instead of yarn.

The Angular Client runs at https://localhost:4200 and communicates with
the API at https://localhost:3000.

```bash
# Install dependencies
yarn

# Start Client & API
yarn start 
```

## Go through NgRx refactoring techniques

Please switch to the branch `refactoring-patterns` to get started.
This branch contains the code base we want to refactor.
All the code of the Angular client is located in `packages/client/src/app/`.

```bash
git checkout refactoring-patterns
```


### Extract Case Reducer

```bash
git checkout step-1
```

### Reduce infrastructural code | createReducer

```bash
git checkout step-2
```

### Systematize mutation operations | @ngrx/entity

```bash
git checkout step-3
```

### Isolate Store structure | selectors

```bash
git checkout step-4
```

### Automate communication infrastructure | ngrx-ducks

```bash
git checkout step-5
```
