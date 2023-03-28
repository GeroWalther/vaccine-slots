import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '@shopify/restyle';

export default function BlueBtn({children, onPress}) {
  const theme = useTheme();
  return (
    <Pressable
      style={[styles.back, {backgroundColor: theme.colors.BluBtn}]}
      onPress={onPress}>
      <Text style={styles.txt}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  back: {
    paddingVertical: 15,
    width: 329,
    height: 50,
    borderRadius: 3,
    marginBottom: 10,
  },
  txt: {
    color: 'white',
    fontWeight: 400,
    fontSize: 12,
    textAlign: 'center',
  },
});
