import {StyleSheet, View, Text, Dimensions} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import BlueBtn from '../ui/BlueBtn';
import AvoidKeyboard from '../ui/AvoidKeyboard';
import CustomModal from '../ui/CustomModal';
import {useTheme} from '@shopify/restyle';
import PressInput from '../ui/PressInput';
const windowHeight = Dimensions.get('screen').height;

const TabByDistrict = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const modalizeRef = useRef(null);
  const modalizeRef2 = useRef(null);

  function onPressState() {
    console.log('random Top');
    modalizeRef.current?.open();
  }

  function onPressDist() {
    console.log('random bottom');
    modalizeRef2.current?.open();
  }

  return (
    <AvoidKeyboard>
      <View
        style={[styles.flex, {backgroundColor: theme.colors.mainBackgrdColor}]}>
        <View style={styles.txtCon}>
          <PressInput onPress={onPressState} editable={false}>
            State
          </PressInput>
          <PressInput onPress={onPressDist} editable={false}>
            District
          </PressInput>
        </View>
        <CustomModal
          ref={modalizeRef}
          head={'States'}
          height={windowHeight / 1.3}
          snap={windowHeight / 2}>
          <Text>a list of states</Text>
        </CustomModal>
        <CustomModal
          ref={modalizeRef2}
          head={'District'}
          height={windowHeight / 1.3}
          snap={windowHeight / 2}>
          <Text>a list of districts</Text>
        </CustomModal>
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
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});
export default TabByDistrict;
