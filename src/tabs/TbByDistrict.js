import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BlueBtn from '../ui/BlueBtn';

const TabByDistrict = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  return (
    <KeyboardAvoidingView
      contentContainerStyle={styles.screen}
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={Platform.OS === 'ios' ? 160 : 180}>
      <View style={styles.flex}>
        <View style={styles.txtCon}>
          <Text style={styles.placeholder}>State</Text>
          <TextInput
            style={styles.txtInp}
            value={state}
            onChangeText={setState}
          />
          <Text style={[styles.placeholder, styles.pl2]}>District</Text>
          <TextInput
            style={[styles.txtInp, styles.txtInp2]}
            value={district}
            onChangeText={setDistrict}
          />
        </View>
        <BlueBtn onPress={() => navigation.navigate('Select', {})}>
          Search
        </BlueBtn>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
  },
  txtCon: {
    position: 'relative',
    width: '100%',
  },
  txtInp: {
    position: 'absolute',
    top: 27,
    left: 26,
    width: '84%',
    height: 54,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 3,
    padding: 10,
  },
  placeholder: {
    fontWeight: 400,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6);',
    position: 'absolute',
    top: 20,
    left: 38,
    lettlerSpacing: 0.4,
  },
  txtInp2: {
    position: 'absolute',
    top: 105,
  },
  pl2: {
    top: 98,
  },
});
export default TabByDistrict;
