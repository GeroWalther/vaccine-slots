import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Modalize} from 'react-native-modalize';

const CustomModal = ({children, ref, head, height, snap}) => {
  return (
    <Modalize
      ref={ref}
      HeaderComponent={<Text style={styles.head}>{head}</Text>}
      modalHeight={height}
      snapPoint={snap}>
      {children}
    </Modalize>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  head: {fontweight: 'bold'},
});
