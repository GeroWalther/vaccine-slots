import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import React from 'react';

const AvoidKeyboard = ({children}) => {
  const windowHeight = Dimensions.get('screen').height;
  const safeHeight = () => {
    if (windowHeight > 700) {
      return 135;
    }
    if (windowHeight < 700) {
      return 110;
    }
  };
  return (
    <KeyboardAvoidingView
      contentContainerStyle={styles.screen}
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={Platform.OS === 'ios' ? safeHeight() : 130}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default AvoidKeyboard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
