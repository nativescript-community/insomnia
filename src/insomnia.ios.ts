export async function keepAwake() {
    const app = UIApplication.sharedApplication;
    if (!app.idleTimerDisabled) {
        app.idleTimerDisabled = true;
    }
}

export async function allowSleepAgain() {
    const app = UIApplication.sharedApplication;
    if (app.idleTimerDisabled) {
        app.idleTimerDisabled = false;
    }
}
