# NativeScript Insomnia

Make the screen not dim (and eventually lock the device) while Insomnia is active.

## Installation
From the command prompt go to your app's `app` folder and execute:

```
npm install nativescript-insomnia
```

## Usage

### keepAwake

```js
  var insomnia = require( "./node_modules/nativescript-insomnia/insomnia" );

  insomnia.keepAwake().then(function() {
      console.log("Insomnia is active");
  })
```

### allowSleepAgain

```js
  var insomnia = require( "./node_modules/nativescript-insomnia/insomnia" );

  insomnia.allowSleepAgain().then(function() {
      console.log("Insomnia is inactive, good night!");
  })
```