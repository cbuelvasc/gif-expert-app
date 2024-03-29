# Gif Expert App

Application built with React, Vite and Tailwind CSS.

### Create Docker Image
```bash
$ docker build . -t "gif-expert-app:v0.0.1"
```


### Testing setup for React + Vite

1. Add packages:
```bash
$ yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
$ yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Optional: If we use Fetch API in the project
```bash
$ yarn add --dev whatwg-fetch
```

3. Update the __ package.json __ scripts
```json
"scripts: {
  "test": "jest --watchAll"
}
```

4. Create babel configuration __babel.config.cjs__
```js
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Optional, but eventually necessary, create Jest config and setup:

__jest.config.cjs__
```js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```js
// In case you need the implementation of the FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```
