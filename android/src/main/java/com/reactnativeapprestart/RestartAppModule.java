package com.reactnativeapprestart;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.app.Activity;
import android.content.Intent;

public class RestartAppModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    RestartAppModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "RestartApp";
    }

    @ReactMethod
    public void restartApp() {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            Intent intent = activity.getPackageManager()
                .getLaunchIntentForPackage(activity.getPackageName());
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
            activity.startActivity(intent);
            activity.finish();
        }
    }
} 