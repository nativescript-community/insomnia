var core = require("@nativescript/core");

exports.keepAwake = function () {
  var keepScreenOn = function () {
    var activity = core.Application.android.foregroundActivity || core.Application.android.startActivity;
    var window = activity.getWindow();
    window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
  };

  return new Promise(function (resolve, reject) {
    try {
      if (core.Application.android.foregroundActivity || core.Application.android.startActivity) {
        keepScreenOn();
        resolve();
      } else {
        core.Application.android.on("activityStarted", function (args) {
          keepScreenOn();
          resolve();
        });
      }
    } catch (ex) {
      console.log("Error in insomnia.keepAwake: " + ex);
      reject(ex);
    }
  });
};

exports.allowSleepAgain = function () {
  return new Promise(function (resolve, reject) {
    try {
      var activity = core.Application.android.foregroundActivity || core.Application.android.startActivity;
      var window = activity.getWindow();
      window.clearFlags(
        android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON
      );
      resolve();
    } catch (ex) {
      console.log("Error in insomnia.allowSleepAgain: " + ex);
      reject(ex);
    }
  });
};
