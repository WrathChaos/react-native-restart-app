package com.reactnativeapprestart;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.app.Activity;
import android.content.Intent;
import android.util.Log;

public class RestartAppModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private static final String TAG = "RestartAppModule";

    public RestartAppModule(ReactApplicationContext context) {
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
            try {
                Log.d(TAG, "Restarting app...");
                Intent intent = activity.getPackageManager()
                    .getLaunchIntentForPackage(activity.getPackageName());
                if (intent != null) {
                    intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK);
                    activity.startActivity(intent);
                    activity.finish();
                    Runtime.getRuntime().exit(0);
                } else {
                    Log.e(TAG, "Launch intent is null");
                }
            } catch (Exception e) {
                Log.e(TAG, "Error restarting app: " + e.getMessage());
            }
        } else {
            Log.e(TAG, "Activity is null");
        }
    }
} 