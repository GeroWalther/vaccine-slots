// import {StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import VerticalDotsBtn from '../ui/VerticalDotsBtn';

import Today from '../tabs/Today';
import ThisWeek from '../tabs/ThisWeek';
import EditBtn from '../ui/EditBtn';

const Select = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  function dots() {}
  function edit() {}
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => {
        return (
          <>
            <EditBtn onPress={edit}>edit</EditBtn>
            <VerticalDotsBtn onPress={dots} />
          </>
        );
      },
    });
  }, [navigation]);

  return (
    <>
      <Tab.Navigator
        screenOptions={{tabBarStyle: {backgroundColor: '#E5E5E5'}}}>
        <Tab.Screen
          name="Today"
          component={Today}
          options={{tabBarLabel: 'Today'}}
        />
        <Tab.Screen
          name="TabByDistrict"
          component={ThisWeek}
          options={{tabBarLabel: 'This Week'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Select;
