# React Native Restart App

A lightweight and efficient React Native library that provides native app restart functionality for both iOS and Android platforms. Perfect for scenarios where you need to completely reset your app's state or handle critical errors.

![npm](https://img.shields.io/npm/v/react-native-restart-app)
![npm](https://img.shields.io/npm/dm/react-native-restart-app)
![GitHub](https://img.shields.io/github/license/yourusername/react-native-restart-app)

## Features

- 🔄 Native implementation for both iOS and Android
- ⚡️ Lightweight and performant
- 🎯 Simple and intuitive API
- 🔧 Zero additional dependencies
- 📱 Cross-platform support
- 🛠 TypeScript support

## Installation

```bash
# Using npm
npm install react-native-restart-app

# Using yarn
yarn add react-native-restart-app
```

### iOS Setup

After installing the package, navigate to your iOS directory and install the pods:

```bash
cd ios && pod install && cd ..
```

### Android Setup

Add the package to your `MainApplication.java`:

```java
import com.reactnativerestartapp.RestartAppPackage;

// Inside getPackages() method
@Override
protected List<ReactPackage> getPackages() {
  List<ReactPackage> packages = new PackageList(this).getPackages();
  packages.add(new RestartAppPackage());
  return packages;
}
```

## Usage

### Basic Usage

```typescript
import RestartApp from "react-native-restart-app";

// Restart the app
RestartApp.restart();
```

### Example Component

```typescript
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import RestartApp from 'react-native-restart-app';

const App = () => {
  const handleRestart = () => {
    RestartApp.restart();
  };

  return (
    <View style={styles.container}>
      <Button
        title="Restart App"
        onPress={handleRestart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

## How It Works

### iOS Implementation

The iOS implementation recreates the root view controller, effectively restarting the app from scratch. This ensures a clean state and proper memory management.

### Android Implementation

The Android implementation uses the package manager to launch a fresh instance of the app with the `FLAG_ACTIVITY_CLEAR_TOP` flag, which clears the activity stack and starts a new instance.

## Platform-Specific Behavior

### iOS

- Performs a complete app restart
- Clears all view controllers
- Resets the root window
- Maintains system-level state

### Android

- Launches a fresh instance of the app
- Clears the activity stack
- Maintains background state
- Preserves system-level configurations

## Best Practices

1. **Error Handling**: Use this library as part of your error recovery strategy
2. **State Management**: Consider saving critical state before restarting
3. **User Experience**: Provide feedback to users before restarting
4. **Testing**: Test thoroughly in both debug and release modes

## Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Clone your fork
3. Install dependencies: `npm install`
4. Make your changes
5. Run tests: `npm test`
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Your Name] - [@yourtwitter](https://twitter.com/yourtwitter)

## Support

If you find this library useful, please consider:

- ⭐️ Starring the repository
- 📝 Opening issues for bugs or feature requests
- 💪 Contributing to the project
- ☕️ [Buy me a coffee](https://buymeacoffee.com/yourusername)

## Acknowledgments

- React Native team for the amazing framework
- All contributors who have helped improve this library
- The open-source community for inspiration and support
