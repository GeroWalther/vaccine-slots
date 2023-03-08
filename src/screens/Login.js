import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import BlueBtn from '../ui/BlueBtn';

const Login = ({navigation}) => {
  const src = require('../assets/Group.png');
  return (
    <View style={styles.flex}>
      <View style={styles.inputcon}>
        <Text style={styles.welcomeTxt}>Welcome</Text>
        <Text style={styles.vaccTxt}>vaccinator & verifier</Text>
        <TextInput style={styles.txtInp} placeholder="Mobile Number" />
        <TextInput style={styles.txtInp} placeholder="Password" />
        <BlueBtn onPress={() => navigation.navigate('Location')}>
          Log in
        </BlueBtn>
      </View>
      <Image style={styles.img} source={src} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  flex: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  img: {
    width: '100%',
    height: 366.19,
  },
  inputcon: {
    marginBottom: 44,
  },
  welcomeTxt: {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 36,
    color: '#757575',
  },
  vaccTxt: {
    fontWeight: 300,
    fontSize: 12,
    lineHeight: 18,
    color: '#262626',
    letterSpacing: 0.4,
    marginBottom: 45,
  },
  txtInp: {
    marginBottom: 24,
    width: 326,
    height: 54,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 3,
    padding: 10,
  },
});
