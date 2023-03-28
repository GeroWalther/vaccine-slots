import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import BlueBtn from '../ui/BlueBtn';
import AvoidKeyboard from '../ui/AvoidKeyboard';
import {Modalize} from 'react-native-modalize';
// import CustomModal from '../ui/Modalize';
import {useTheme} from '@shopify/restyle';
const windowHeight = Dimensions.get('screen').height;

const TabByDistrict = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();

  const modalizeRef = useRef(null);
  const modalizeRef2 = useRef(null);

  function onPressState() {
    modalizeRef.current?.open();
  }

  function onPressDist() {
    modalizeRef2.current?.open();
  }

  return (
    <AvoidKeyboard>
      <View
        style={[styles.flex, {backgroundColor: theme.colors.mainBackgrdColor}]}>
        <View style={styles.txtCon}>
          <Pressable onPress={onPressState}>
            <Text style={styles.placeholder}>State</Text>
            <TextInput
              style={styles.txtInp}
              value={state}
              onChangeText={setState}
            />
          </Pressable>
          <Pressable onPress={onPressDist}>
            <Text style={[styles.placeholder, styles.pl2]}>District</Text>
            <TextInput
              style={[styles.txtInp, styles.txtInp2]}
              value={district}
              onChangeText={setDistrict}
            />
          </Pressable>
        </View>
        <Modalize
          ref={modalizeRef}
          HeaderComponent={<Text>States</Text>}
          modalHeight={windowHeight / 1.35}
          snapPoint={windowHeight / 1.35}>
          <View>
            <Text>a list of states</Text>
          </View>
        </Modalize>
        <Modalize
          ref={modalizeRef2}
          HeaderComponent={<Text>District</Text>}
          modalHeight={windowHeight / 1.4}
          snapPoint={windowHeight / 2}>
          <View>
            <Text>a list of districts</Text>
          </View>
        </Modalize>
        <BlueBtn onPress={() => navigation.navigate('Select', {})}>
          Search
        </BlueBtn>
      </View>
    </AvoidKeyboard>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtCon: {
    position: 'relative',
    width: '100%',
    marginTop: windowHeight > 700 ? 20 : 0,
  },
  txtInp: {
    position: 'absolute',
    top: 27,
    left: 26,
    width: windowHeight > 700 ? '88%' : '86%',
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
    // lettlerSpacing: 0.4,
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
