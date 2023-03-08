import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import BlueBtn from '../ui/BlueBtn';

const Login = ({navigation}) => {
  const [mobNumber, setMobNumber] = useState();
  const [pass, setPass] = useState();
  const src = require('../assets/Group.png');
  return (
    <View style={styles.flex}>
      <View style={styles.inputcon}>
        <Text style={styles.welcomeTxt}>Welcome</Text>
        <Text style={styles.vaccTxt}>vaccinator & verifier</Text>
        <View style={styles.txtCon}>
          <Text style={styles.placeholder}>Mobile Number</Text>
          <TextInput
            style={styles.txtInp}
            value={mobNumber}
            onChangeText={setMobNumber}
          />
          <Text style={styles.placeholder2}>Password</Text>
          <TextInput
            style={styles.txtInp2}
            value={pass}
            onChangeText={setPass}
          />
        </View>
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
    position: 'absolute',
    top: 0,
    left: 0,
    width: '84%',
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 3,
    padding: 10,
  },
  txtInp2: {
    position: 'absolute',
    top: 80,
    left: 0,
    width: '84%',
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 3,
    padding: 10,
  },
  txtCon: {
    backgroundColor: '#20eb2045',
    position: 'relative',
    width: '100%',
    height: 156,
  },
  placeholder: {
    color: 'hsla(0, 0%, 0%, 0.6)',
    position: 'absolute',
    top: -8,
    left: 10,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
  },
  placeholder2: {
    color: 'hsla(0, 0%, 0%, 0.6)',
    position: 'absolute',
    top: 72,
    left: 10,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
  },
});
