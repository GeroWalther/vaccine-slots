import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Nav from './src/routes/Navigation';

import {ThemeProvider} from '@shopify/restyle';
import theme from './src/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={[styles.view, {backgroundColor: theme.colors.mainBackgrdColor}]}>
        <StatusBar barStyle={'dark-content'} />
        <Nav />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default App;
