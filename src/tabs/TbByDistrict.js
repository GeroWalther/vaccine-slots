import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BlueBtn from '../ui/BlueBtn';

const TabByDistrict = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.flex}>
      <Text>District</Text>
      <BlueBtn onPress={() => navigation.navigate('Select', {})}>
        Search
      </BlueBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#E5E5E5',
  },
});
export default TabByDistrict;
