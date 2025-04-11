"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var RestartApp = {
  restart: function () {
    if (react_native_1.Platform.OS === "ios") {
      react_native_1.NativeModules.RestartApp.restart();
    } else {
      react_native_1.NativeModules.RestartApp.restartApp();
    }
  },
};
exports.default = RestartApp;
//# sourceMappingURL=index.js.map
