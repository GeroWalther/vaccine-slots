import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

export default function BlueBtn({children, onPress}) {
  return (
    <Pressable style={styles.back} onPress={onPress}>
      <Text style={styles.txt}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#014ED0',
    paddingVertical: 15,
    width: 329,
    height: 50,
    borderRadius: 3,
  },
  txt: {
    color: 'white',
    fontWeight: 400,
    fontSize: 12,
    textAlign: 'center',
  },
});
