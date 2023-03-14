import {StyleSheet, Text, View, FlatList, Switch} from 'react-native';
import React, {useState} from 'react';
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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.con}>
      <View style={styles.topcon}>
        <View style={styles.tp}>
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
        </View>
        <View style={styles.tp2}>
          <Text style={styles.tagTx}>First Dose</Text>
          <Switch
            style={styles.switch}
            trackColor={{false: '#767577', true: '#f7f7f7'}}
            thumbColor={isEnabled ? '#34c96b' : '#f5f5f5'}
            ios_backgroundColor="#cacaca"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
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
    marginHorizontal: 6,
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
    marginVertical: 15,
  },
  flat: {
    marginBottom: 15,
  },
  switch: {marginLeft: 5, marginRight: 30, width: 30},
  tp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  tp2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
