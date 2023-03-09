import {} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Location from '../screens/Location';
import Select from '../screens/Select';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: '#242424',
          headerStyle: {
            backgroundColor: '#E5E5E5',
          },
          headerTitleStyle: {
            // fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 21,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{title: 'Change location'}}
        />
        <Stack.Screen
          name="Select"
          component={Select}
          options={{
            title: 'Kottayam',
            headerTitleStyle: {fontSize: 14},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
