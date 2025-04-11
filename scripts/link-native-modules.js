const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const rootDir = path.resolve(__dirname, "..");
const exampleDir = path.resolve(rootDir, "example");

// Link iOS native module
const iosProjectPath = path.resolve(exampleDir, "ios");
if (fs.existsSync(iosProjectPath)) {
  console.log("Linking iOS native module...");
  const podfilePath = path.resolve(iosProjectPath, "Podfile");
  let podfileContent = fs.readFileSync(podfilePath, "utf8");

  // Add the local pod
  if (!podfileContent.includes("pod 'RestartApp'")) {
    podfileContent = podfileContent.replace(
      "target 'example' do",
      `target 'example' do\n  pod 'RestartApp', :path => '../ios'`,
    );
    fs.writeFileSync(podfilePath, podfileContent);

    // Run pod install
    try {
      execSync("cd ios && pod install", { cwd: exampleDir });
      console.log("iOS native module linked successfully!");
    } catch (error) {
      console.error("Error linking iOS native module:", error);
    }
  }
}

// Link Android native module
const androidProjectPath = path.resolve(exampleDir, "android");
if (fs.existsSync(androidProjectPath)) {
  console.log("Linking Android native module...");
  const settingsGradlePath = path.resolve(
    androidProjectPath,
    "settings.gradle",
  );
  let settingsGradleContent = fs.readFileSync(settingsGradlePath, "utf8");

  // Add the local module
  if (!settingsGradleContent.includes("include ':react-native-restart-app'")) {
    settingsGradleContent += `
include ':react-native-restart-app'
project(':react-native-restart-app').projectDir = new File(rootProject.projectDir, '../android')`;
    fs.writeFileSync(settingsGradlePath, settingsGradleContent);
  }

  // Update app/build.gradle
  const appBuildGradlePath = path.resolve(
    androidProjectPath,
    "app/build.gradle",
  );
  let appBuildGradleContent = fs.readFileSync(appBuildGradlePath, "utf8");

  if (
    !appBuildGradleContent.includes(
      "implementation project(':react-native-restart-app')",
    )
  ) {
    appBuildGradleContent = appBuildGradleContent.replace(
      "dependencies {",
      `dependencies {\n    implementation project(':react-native-restart-app')`,
    );
    fs.writeFileSync(appBuildGradlePath, appBuildGradleContent);
  }

  console.log("Android native module linked successfully!");
}

// Update MainApplication.java
const mainApplicationPath = path.resolve(
  androidProjectPath,
  "app/src/main/java/com/example/MainApplication.java",
);
if (fs.existsSync(mainApplicationPath)) {
  let mainApplicationContent = fs.readFileSync(mainApplicationPath, "utf8");

  // Add import
  if (
    !mainApplicationContent.includes(
      "import com.reactnativerestartapp.RestartAppPackage;",
    )
  ) {
    mainApplicationContent = mainApplicationContent.replace(
      "import com.facebook.react.ReactPackage;",
      `import com.facebook.react.ReactPackage;\nimport com.reactnativerestartapp.RestartAppPackage;`,
    );
  }

  // Add package to getPackages
  if (!mainApplicationContent.includes("new RestartAppPackage()")) {
    mainApplicationContent = mainApplicationContent.replace(
      "List<ReactPackage> packages = new PackageList(this).getPackages();",
      `List<ReactPackage> packages = new PackageList(this).getPackages();\n      packages.add(new RestartAppPackage());`,
    );
  }

  fs.writeFileSync(mainApplicationPath, mainApplicationContent);
  console.log("MainApplication.java updated successfully!");
}

console.log("Native modules linking completed!");
