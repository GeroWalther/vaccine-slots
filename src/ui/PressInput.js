import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
const width = Dimensions.get('screen').width;

const PressInput = ({onPress, children, editable, style, value}) => {
  return (
    <Pressable onPress={onPress}>
      <View pointerEvents="none">
        <Text style={styles.placeholder}>{children}</Text>
        <TextInput
          style={[styles.txtInp, style]}
          value={value}
          // onChangeText={setState}
          editable={editable}
        />
      </View>
    </Pressable>
  );
};

export default PressInput;

const styles = StyleSheet.create({
  txtInp: {
    width: width / 1.1,
    height: 54,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
  },
  placeholder: {
    fontWeight: 400,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6);',
  },
});
