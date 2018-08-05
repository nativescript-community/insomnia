# NativeScript Insomnia

## Demo app (Angular)
This plugin is part of the [plugin showcase app](https://github.com/EddyVerbruggen/nativescript-pluginshowcase/tree/master/app/ar) I built using Angular.

## Installation
Run the following command from the root of your project:

```
tns plugin add nativescript-insomnia
```

## Usage

To use this plugin you must first require() it:

### JavaScript
```js
var insomnia = require("nativescript-insomnia");
```

### TypeScript
You could do the same as in JS, but this looks fancier, right?

```typescript
const { keepAwake, allowSleepAgain } = require("nativescript-insomnia");
```

### Angular
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
