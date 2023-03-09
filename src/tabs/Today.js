import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import SearchResItem from '../ui/SearchResItem';
import BlueBtn from '../ui/BlueBtn';

const data = [
  {
    key: 1,
    title: 'Mariyan Hospital',
    descr: 'Mariyan Hospital, Pala kottayam, kerala',
    firstColor: '#FB0000',
    count: '06',
    secondColor: '#23CD75',
    count2: '64',
  },
  {
    key: 2,
    title: 'Bharath Hospital',
    descr: 'Bharath Hospital, kumarakom kottayam, kerala',
    firstColor: '#23CD75',
    count: '75',
    secondColor: '#FB0000',
    count2: '09',
  },
  {
    key: 3,
    title: 'KIMS Bellerose Institute',
    descr:
      'KIMS Bellerose Institute of Medical Science, Athirampuzha kottayam, kerala',
    firstColor: '#FB0000',
    count: '03',
    secondColor: '#23CD75',
    count2: '45',
  },
];

const Today = () => {
  const toggle = require('../assets/toggle.png');

  return (
    <View style={styles.con}>
      <View style={styles.topcon}>
        <View style={styles.tag}>
          <Text style={styles.tagTx}>18+</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTx}>45+</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTx}>Free</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTx}>Paid</Text>
        </View>
        <View style={styles.selectKnobcon}>
          <Text style={styles.tagTx}>First Dose</Text>
          <Image source={toggle} style={styles.track} />
        </View>
      </View>
      <FlatList
        style={styles.flat}
        data={data}
        renderItem={({item}) => (
          <SearchResItem
            title={item.title}
            descr={item.descr}
            color={item.firstColor}
            color2={item.secondColor}
            count={item.count}
            count2={item.count2}
          />
        )}
      />
      <BlueBtn>Notify Me</BlueBtn>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    justifyContent: 'center',
  },
  tagTx: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center',
  },
  topcon: {
    flexDirection: 'row',

    alignItems: 'center',
    marginVertical: 30,
  },
  flat: {
    marginBottom: 30,
  },
  selectKnobcon: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 60,
    height: 25,
    width: 50,
  },
  track: {
    height: '100%',
    width: '100%',
    marginLeft: 5,
  },
});
