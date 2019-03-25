# Breadheadless CMS

Simple and powerful headless CMS provide fancy admin interface and reliable backend for your application.

## Usage

`yarn add @breadhead/cms`

Enjoy!

## Contributing

Install project
```console
git clone ...
yarn
yarn link
yarn dev
```

Create the other project and link CMS
```console
mkdir test-project
cd test-project
yarn init
yarn link @breadhead/cms
```

```js
// test-project/index.js
const { cms } = require('@breadhead/cms')

cms(3434)
```

```console
node index.js
```

You are beautiful!

### Also...

We use [@solid-soda/script](https://github.com/solid-soda/scripts):
+ `yarn s pretty` to fix code-style
+ `yarn s lint` to run linters
+ `yarn s cz` to commit changes
+ `yarn s release` to create new release
