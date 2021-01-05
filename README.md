# NativeScript Insomnia


[npm-image]:http://img.shields.io/npm/v/nativescript-community/insomnia.svg
[npm-url]:https://npmjs.org/package/nativescript-community/insomnia
[downloads-image]:http://img.shields.io/npm/dm/nativescript-community/insomnia.svg

> 💡 Plugin version 2.0.0+ is compatible with NativeScript 7+. If you need to target older NativeScript versions, please stick to plugin version 1.2.3.

## Demo app (Angular)
This plugin is part of the [plugin showcase app](https://github.com/EddyVerbruggen/nativescript-pluginshowcase/tree/master/app/ar) I built using Angular.

## Installation
Run the following command from the root of your project:

```
tns plugin add @nativescript-community/insomnia
```

## Usage

To use this plugin you must first require() it:

#### JavaScript
```js
var insomnia = require("@nativescript-community/insomnia");
```

#### TypeScript
You could do the same as in JS, but this looks fancier, right?

```typescript
import { keepAwake, allowSleepAgain } from "@nativescript-community/insomnia";
```

### keepAwake

```typescript
  insomnia.keepAwake().then(function() {
      console.log("Insomnia is active");
  })
```

### allowSleepAgain

```typescript
  insomnia.allowSleepAgain().then(function() {
      console.log("Insomnia is inactive, good night!");
  })
```
