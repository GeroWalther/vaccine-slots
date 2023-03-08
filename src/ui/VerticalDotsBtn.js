import {Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function VerticalDotsBtn({onPress}) {
  const src = require('../assets/more-vertical.png');
  return (
    <Pressable style={styles.margin} onPress={onPress}>
      <Image style={styles.btn} source={src} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  btn: {
    height: 24,
    width: 24,
  },
  margin: {
    marginLeft: 180,
  },
});
