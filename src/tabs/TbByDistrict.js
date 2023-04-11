import {StyleSheet, View, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BlueBtn from '../ui/BlueBtn';
import AvoidKeyboard from '../ui/AvoidKeyboard';
import {useTheme} from '@shopify/restyle';
import CustomModal from '../ui/CustomModal';
import PressInput from '../ui/PressInput';
import axios from 'axios';
import ModalContent from '../ui/ModalContent';

const TabByDistrict = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [stateList, setStateList] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState('');
  const [selectedDistrict, setselectedDistrict] = useState('');

  const modalizeRef = useRef(null);
  const modalizeRef2 = useRef(null);

  function onStateSelect(state) {
    setSelectedState(state);
    modalizeRef.current?.close();
  }

  function onDistrictSelect(district) {
    setselectedDistrict(district);
    modalizeRef2.current?.close();
  }

  async function onPressState() {
    modalizeRef.current?.open();
    try {
      const response = await axios.get('http://localhost:4000/states/');
      setStateList(response.data.data);
    } catch (err) {
      console.log('catch blog: ', err.message);
    }
  }

  async function onPressDist() {
    modalizeRef2.current?.open();
    try {
      const response = await axios.get(
        `http://localhost:4000/districts/${selectedState.state_id}`,
      );
      setDistricts(response.data.data);
    } catch (err) {
      console.log('catch blog: ', err.message);
    }
  }
  // console.log(`outer log: ${selectedState.state_name}`);
  // console.log(`outer log2: ${selectedDistrict.district_name}`);
  return (
    <AvoidKeyboard>
      <View
        style={[styles.flex, {backgroundColor: theme.colors.mainBackgrdColor}]}>
        <View style={styles.txtCon}>
          <PressInput
            value={selectedState.state_name}
            onPress={onPressState}
            editable={false}>
            State
          </PressInput>
          <PressInput
            value={selectedDistrict.district_name}
            onPress={onPressDist}
            editable={false}>
            District
          </PressInput>
        </View>
        <CustomModal ref={modalizeRef} head={'States'}>
          {stateList && (
            <FlatList
              data={stateList}
              renderItem={({item}) => (
                <ModalContent
                  onPress={() => onStateSelect(item)}
                  content={item.state_name}
                />
              )}
              keyExtractor={item => item.state_id}
            />
          )}
        </CustomModal>
        <CustomModal ref={modalizeRef2} head={'District'}>
          {districts && (
            <FlatList
              data={districts}
              renderItem={({item}) => (
                <ModalContent
                  onPress={() => onDistrictSelect(item)}
                  content={item.district_name}
                />
              )}
              keyExtractor={item => item.district_id}
            />
          )}
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
