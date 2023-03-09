import {StyleSheet, Text, Pressable, Platform} from 'react-native';
import React from 'react';

export default function ClearBtn({children, onPress}) {
  return (
    <Pressable style={styles.press} onPress={onPress}>
      <Text style={styles.editbtn}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  editbtn: {
    color: '#014ED0',
    fontWeight: '400',
    fontSize: 9,
    lineHeight: 14,
    textDecorationLine: 'underline',
  },
  press: {
    marginLeft: Platform.OS === 'ios' ? 5 : 6,
    marginTop: 5,
    marginRight: 20,
  },
});
