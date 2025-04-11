import { NativeModules, Platform } from "react-native";

const RestartApp = {
  restart: () => {
    if (Platform.OS === "ios") {
      NativeModules.RestartApp.restart();
    } else {
      NativeModules.RestartApp.restartApp();
    }
  },
};

export default RestartApp;
