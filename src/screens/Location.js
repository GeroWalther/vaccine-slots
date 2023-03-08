// import {StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import VerticalDotsBtn from '../ui/VerticalDotsBtn';
import TabPinCode from '../tabs/TbPinCode';
import TabByDistrict from '../tabs/TbByDistrict';

const Location = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  function dots() {}
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => {
        return <VerticalDotsBtn onPress={dots} />;
      },
    });
  }, [navigation]);

  return (
    <>
      <Tab.Navigator
        screenOptions={{tabBarStyle: {backgroundColor: '#E5E5E5'}}}>
        <Tab.Screen
          name="PinCode"
          component={TabPinCode}
          options={{tabBarLabel: 'Search by pin'}}
        />
        <Tab.Screen
          name="TabByDistrict"
          component={TabByDistrict}
          options={{tabBarLabel: 'Search by District'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Location;

// const styles = StyleSheet.create({});
