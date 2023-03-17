import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import BlueBtn from '../ui/BlueBtn';
import {useForm} from 'react-hook-form';
import CustomInput from '../ui/CustomInput';

const windowHeight = Dimensions.get('screen').height;

const Login = ({navigation}) => {
  const src = require('../assets/Group.png');
  const eye = require('../assets/eye.png');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const onSubmit = data => {
    navigation.navigate('Location');
  };

  return (
    <View style={styles.flex}>
      <View style={styles.inputcon}>
        <Text style={styles.welcomeTxt}>Welcome</Text>
        <Text style={styles.vaccTxt}>vaccinator & verifier</Text>
        <View style={styles.txtCon}>
          <Text style={styles.placeholder}>Mobile Number</Text>
          {errors.mobileNumber && (
            <Text style={styles.err}>{errors.mobileNumber.message}</Text>
          )}
          <CustomInput
            control={control}
            name="mobileNumber"
            rules={{
              required: true,
              minLength: {
                value: 6,
                message: 'Must be a Number between 6 and 8 digits long',
              },
              maxLength: {
                value: 8,
                message: 'Must be a Number between 6 and 8 digits long',
              },
              pattern: {
                value: /^[0-9]*$/, // Only allow digits}
                message: 'Must be a Number between 6 and 8 digits long',
              },
            }}
            stylesInput={styles.txtInp}
            keyboardType="numeric"
          />
          <Text style={styles.placeholder2}>Password</Text>
          {errors.password && (
            <Text style={styles.err2}>{errors.password.message}</Text>
          )}
          <CustomInput
            control={control}
            name="password"
            rules={{
              required: {value: true, message: 'Password required'},
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
              maxLength: {
                value: 10,
                message: 'Password must be at max 10 to characters long',
              },
            }}
            stylesInput={styles.txtInp2}
            secureTextEntry
          />
          <Image style={styles.imgeye} source={eye} />
        </View>
        <BlueBtn onPress={handleSubmit(onSubmit)}>Log in</BlueBtn>
      </View>
      <Image style={styles.img} source={src} />
    </View>
  );
};

export default Login;

function dynamicHeight() {
  if (windowHeight > 699 && windowHeight < 854) {
    return 364;
  }
  if (windowHeight > 855) {
    return 384;
  }
  if (windowHeight < 699) {
    return '45%';
  }
}

const styles = StyleSheet.create({
  flex: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  img: {
    width: '100%',
    height: dynamicHeight(),
    aspectRatio: 1.1 / 1,
  },
  inputcon: {
    marginBottom: windowHeight > 855 ? 50 : 10,
  },
  welcomeTxt: {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 36,
    color: '#757575',
  },
  vaccTxt: {
    fontWeight: 300,
    left: 3,
    fontSize: 12,
    lineHeight: 18,
    color: '#262626',
    letterSpacing: 0.4,
    marginBottom: windowHeight > 700 ? 60 : 45,
  },
  txtInp: {
    marginBottom: 24,
    position: 'absolute',
    top: 0,
    left: windowHeight > 855 ? -18 : 0,
    width: windowHeight > 700 ? '84%' : '88%',
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 3,
    paddingHorizontal: 15,
  },
  txtInp2: {
    position: 'absolute',
    top: 80,
    left: windowHeight > 855 ? -18 : 0,
    width: windowHeight > 700 ? '84%' : '88%',
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 3,
    padding: 10,
  },
  txtCon: {
    position: 'relative',
    width: '100%',
    height: 156,
    marginBottom: windowHeight > 850 ? 20 : 0,
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
  imgeye: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 92,
    left: 291,
  },
  err: {
    color: 'red',
    marginTop: 50,
  },
  err2: {
    color: 'red',
    marginTop: 130,
  },
});
