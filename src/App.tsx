import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';

import Welcome from './components/Welcome';

import theme from './global/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Welcome name="José Eduardo" />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
