var appModule = require("application");

exports.keepAwake = function () {
  return new Promise(function (resolve, reject) {
    try {
      var window = appModule.android.currentContext.getWindow();
      window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
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
      var window = appModule.android.currentContext.getWindow();
      window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
      resolve();
    } catch (ex) {
      console.log("Error in insomnia.allowSleepAgain: " + ex);
      reject(ex);
    }
  });
};