import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Select = () => {
  return (
    <View>
      <Text style={styles.txt}>Select</Text>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
});
