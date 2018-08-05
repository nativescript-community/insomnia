var utils = require("tns-core-modules/utils/utils");

exports.keepAwake = function () {
  return new Promise(function (resolve, reject) {
    try {
      var app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
      if (!app.idleTimerDisabled) {
        app.idleTimerDisabled = true;
      }
      resolve();
    } catch (ex) {
      console.log("Error in insomnia.keepAwake: " + ex);
      reject(ex);
    }
  });
};

exports.allowSleepAgain = function () {
  return new Promise(function (resolve, reject) {
    try {
      var app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
      if (app.idleTimerDisabled) {
        app.idleTimerDisabled = false;
      }
      resolve();
    } catch (ex) {
      console.log("Error in insomnia.allowSleepAgain: " + ex);
      reject(ex);
    }
  });
};
