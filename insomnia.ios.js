exports.keepAwake = function () {
  return new Promise(function (resolve, reject) {
    try {
      var app = UIApplication.sharedApplication();
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
      var app = UIApplication.sharedApplication();
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