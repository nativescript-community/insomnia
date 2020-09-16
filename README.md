# NativeScript Insomnia

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[npm-image]:http://img.shields.io/npm/v/nativescript-insomnia.svg
[npm-url]:https://npmjs.org/package/nativescript-insomnia
[downloads-image]:http://img.shields.io/npm/dm/nativescript-insomnia.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

> 💡 Plugin version 2.0.0+ is compatible with NativeScript 7+. If you need to target older NativeScript versions, please stick to plugin version 1.2.3.

## Demo app (Angular)
This plugin is part of the [plugin showcase app](https://github.com/EddyVerbruggen/nativescript-pluginshowcase/tree/master/app/ar) I built using Angular.

## Installation
Run the following command from the root of your project:

```
tns plugin add nativescript-insomnia
```

## Usage

To use this plugin you must first require() it:

#### JavaScript
```js
var insomnia = require("nativescript-insomnia");
```

#### TypeScript
You could do the same as in JS, but this looks fancier, right?

```typescript
import { keepAwake, allowSleepAgain } from "nativescript-insomnia";
```

### keepAwake

```js
  insomnia.keepAwake().then(function() {
      console.log("Insomnia is active");
  })
```

### allowSleepAgain

```js
  insomnia.allowSleepAgain().then(function() {
      console.log("Insomnia is inactive, good night!");
  })
```
