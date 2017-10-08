# Websocket test client

A React app that listes to a websocket connection, and displays the current formatted date once per second.

## Requirements

- [Node.js >= 8.6.0](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/en/docs/install)

## Install dependencies

Use `yarn` to install the dependencies in `package.json`:

```
yarn
```

## Run server locally

Run a hot reloading local server on [localhost:3000](http://localhost:3000):

```
yarn start
```

## Testing

Run the tests in interactive mode:

```
yarn test
```

Run the tests once, not in interactive mode:

```
CI=true yarn test
```

## Build for production

Build `src` to `build` with production settings:

```
yarn build
```

## Deploy to Github Pages

Deploy to [mocon.github.io/socket-test-client](https://mocon.github.io/socket-test-client/):

```
yarn run deploy
```

## Clean install of dependencies

Delete `node_modules`, clear the `yarn` cache, and re-install the dependencies:

```
yarn run clean
```
