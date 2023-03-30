import {StyleSheet, Text, Dimensions} from 'react-native';
import React, {forwardRef} from 'react';
import {Modalize} from 'react-native-modalize';
const windowHeight = Dimensions.get('screen').height;

const CustomModal = forwardRef((props, ref) => {
  const {children, head} = props;
  return (
    <Modalize
      ref={ref}
      HeaderComponent={<Text style={styles.head}>{head}</Text>}
      modalHeight={windowHeight / 1.3}
      snapPoint={windowHeight / 1.5}>
      {children}
    </Modalize>
  );
});

export default CustomModal;

const styles = StyleSheet.create({
  head: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
