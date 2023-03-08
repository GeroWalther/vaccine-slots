import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';

import VerticalDotsBtn from '../ui/VerticalDotsBtn';

const Location = ({navigation}) => {
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
    <View>
      <Text style={styles.txt}>Location</Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
});
