# Breadheadless CMS

Simple and powerful headless CMS provide fancy admin interface and reliable backend for your application.

## Usage

`yarn add @breadhead/cms`

```js
// server.js
const { cms } = require('@breadhead/cms')

const entities = /* ... */
const firstPlugin = /* ... */
const otherPlugins = /* ... */

cms(entities)
  .use(firstPlugin)
  .use(...otherPLugins)
  .run(4343)
```

Enjoy!

## Contributing

Install project
```console
git clone ...
yarn
yarn dev
```

You are beautiful!

### Also...

We use [@solid-soda/script](https://github.com/solid-soda/scripts):
+ `yarn s pretty` to fix code-style
+ `yarn s lint` to run linters
+ `yarn s cz` to commit changes
+ `yarn s release` to create new release
