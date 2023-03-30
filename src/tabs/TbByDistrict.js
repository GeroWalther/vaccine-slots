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
  const [stateList, setStateList] = useState();
  const [districts, setDistricts] = useState();

  const modalizeRef = useRef(null);
  const modalizeRef2 = useRef(null);

  function onStateSelect() {
    console.log('state selected');
  }

  function onDistrictSelect() {
    console.log('district selected');
  }

  async function onPressState() {
    modalizeRef.current?.open();
    try {
      const response = await axios.get(
        'https://cdndemo-api.co-vin.in/api/v2/admin/location/states',
      );
      setStateList(response.data.states);
    } catch (err) {
      console.log('catch blog: ', err.message);
    }
  }

  async function onPressDist() {
    modalizeRef2.current?.open();
    try {
      const response = await axios.get(
        'https://cdn-api.co-vin.in/api/v2/admin/location/districts/17',
      );
      setDistricts(response.data.districts);
    } catch (err) {
      console.log('catch blog: ', err.message);
    }
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
        <CustomModal ref={modalizeRef} head={'States'}>
          {stateList && (
            <FlatList
              data={stateList}
              renderItem={({item}) => (
                <ModalContent
                  onPress={onStateSelect}
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
                  onPress={onDistrictSelect}
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
