import {StyleSheet, Text} from 'react-native';
import React, {forwardRef} from 'react';
import {Modalize} from 'react-native-modalize';

const CustomModal = forwardRef((props, ref) => {
  const {children, head, height, snap} = props;
  return (
    <Modalize
      ref={ref}
      HeaderComponent={<Text style={styles.head}>{head}</Text>}
      modalHeight={height}
      snapPoint={snap}>
      {children}
    </Modalize>
  );
});

export default CustomModal;

const styles = StyleSheet.create({
  head: {fontweight: 'bold'},
});
