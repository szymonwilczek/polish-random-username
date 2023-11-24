[npm]: https://img.shields.io/npm/v/polish-random-username
[npm-url]: https://www.npmjs.com/package/polish-random-username
[size]: https://packagephobia.com/badge?p=polish-random-username
[size-url]: https://packagephobia.com/result?p=polish-random-username

[![npm][npm]][npm-url]
[![size][size]][size-url]

# polish-random-username

🍣 A TypeScript/JavaScript plugin to generate polish random usernames based on polish language.

## Requirements

This plugin does not include TypeScript or tslib as a dependency, you must install those yourself.

## Install

Using npm:

```console
npm install polish-random-username
```

## Usage

Create a project and import the plugin:

```js
import { getRandomUsername } from "polish-random-username";
```

or

```js
const { getRandomUsername } = require("polish-random-username");
```

Then you can call it like this:

```js
const username = getRandomUsername();
console.log(username); //for example: Szczęśliwy Jaguar
```

## Meta

[CONTRIBUTING](/.github/CONTRIBUTING.md)

[LICENSE (MIT)](/LICENSE)
