/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import RestartApp from 'react-native-app-restart';

export default function App() {
  const handleRestart = () => {
    try {
      RestartApp.restart();
    } catch (error) {
      console.error('Error restarting app:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native App Restart Example</Text>
      <Text style={styles.subtitle}>Platform: {Platform.OS}</Text>
      <TouchableOpacity style={styles.button} onPress={handleRestart}>
        <Text style={styles.buttonText}>Restart App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
