import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

const ModalContent = ({content, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.txt}>{content}</Text>
    </Pressable>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  txt: {
    fontSize: 18,
    color: '#504646',
  },
});
