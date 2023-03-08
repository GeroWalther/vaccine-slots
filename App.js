import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Nav from './src/routes/Navigation';

function App() {
  return (
    <SafeAreaView style={styles.view}>
      <StatusBar barStyle={'dark-content'} />
      <Nav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
