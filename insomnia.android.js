var app = require("tns-core-modules/application");

exports.keepAwake = function () {

  var keepScreenOn = function() {
    var activity = app.android.foregroundActivity || app.android.startActivity;
    var window = activity.getWindow();
    window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
  };

  return new Promise(function (resolve, reject) {
    try {

      if (app.android.foregroundActivity || app.android.startActivity) {
        keepScreenOn();
        resolve();
      } else {
        app.android.on("activityStarted", function (args) {
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
      var activity = app.android.foregroundActivity || app.android.startActivity;
      var window = activity.getWindow();
      window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
      resolve();
    } catch (ex) {
      console.log("Error in insomnia.allowSleepAgain: " + ex);
      reject(ex);
    }
  });
};
