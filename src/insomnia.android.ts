import { Application } from '@nativescript/core';

function keepScreenOn(activity: androidx.appcompat.app.AppCompatActivity) {
    const window = activity.getWindow();
    window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
}
export async function keepAwake() {
    const activity = Application.android.foregroundActivity || Application.android.startActivity;
    if (activity) {
        keepScreenOn(activity);
    } else {
        Application.android.once('activityStarted', () => keepScreenOn(activity));
    }
}

export async function allowSleepAgain() {
    const activity = Application.android.foregroundActivity || Application.android.startActivity;
    if (activity) {
        const window = activity.getWindow();
        window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    }
}
