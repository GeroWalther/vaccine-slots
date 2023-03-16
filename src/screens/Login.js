import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import BlueBtn from '../ui/BlueBtn';
import {useForm, Controller} from 'react-hook-form';

const windowHeight = Dimensions.get('screen').height;

const Login = ({navigation}) => {
  // const [mobNum, setMobNumber] = useState();
  const [pass, setPass] = useState();
  const [err, setErr] = useState(false);
  const src = require('../assets/Group.png');
  const eye = require('../assets/eye.png');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      mobileNumber: '',
      password: '',
    },
  });
  const onSubmit = data => {
    console.log(data);
    // const mobNumIsValid = data.length >= 6;
    // console.log(mobNumIsValid);

    if (data) {
      navigation.navigate('Location');
    } else {
      setErr(true);
      Alert.alert(
        'Invalid Mobile Number',
        'Please provide a valid mobile number with at least 6 digits or longer',
        [
          {
            text: 'Ok',
            onPress: () => console.log('Ok pressed'),
          },
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <View style={styles.flex}>
      <View style={styles.inputcon}>
        <Text style={styles.welcomeTxt}>Welcome</Text>
        <Text style={styles.vaccTxt}>vaccinator & verifier</Text>
        <View style={styles.txtCon}>
          <Text style={styles.placeholder}>Mobile Number</Text>
          {err && <Text style={styles.err}>{errors.message}</Text>}
          <Controller
            control={control}
            rules={{
              required: 'Mobile Number is required',
              minLength: {
                value: 6,
                message: 'Number must be between 6 and 8 digits long',
              },
              maxLength: {
                value: 8,
                message: 'Number must be between 6 and 8 digits long',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.txtInp}
                keyboardType="email-address"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="mobileNumber"
          />
          <Text style={styles.placeholder2}>Password</Text>
          {err && <Text style={styles.err}>{errors.message}</Text>}
          <Controller
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at 6 to Characters long',
              },
              maxLength: {
                value: 10,
                message: 'Password must be at max 10 to Characters long',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.txtInp2}
                value={pass}
                onChangeText={setPass}
              />
            )}
            name="password"
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
  },
});
