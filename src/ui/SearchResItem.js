import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SearchResItem = ({title, descr, color, color2, count, count2}) => {
  return (
    <View style={styles.con}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.descr}>{descr}</Text>
      <View style={styles.boxes}>
        <View style={styles.column}>
          <View style={[styles.box, {backgroundColor: color}]}>
            <Text style={styles.count}>{count}</Text>
          </View>
          <Text style={styles.tx}>Covaxin</Text>
        </View>
        <View style={styles.column}>
          <View style={[styles.box, {backgroundColor: color2}]}>
            <Text style={styles.count}>{count2}</Text>
          </View>
          <Text style={styles.tx}>Covishield</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchResItem;

const styles = StyleSheet.create({
  con: {
    backgroundColor: 'white',
    flex: 1,
    width: 335,
    padding: 20,
    gap: 6,
    marginBottom: 20,
  },
  boxes: {
    flexDirection: 'row',
  },
  box: {
    width: 36,
    height: 33,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    color: '#FFFAFA',
    fontSize: 9,
    lineHeight: 13.5,
    fontWeight: 400,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
  },
  tx: {
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 14,
    color: '#242424',
    marginTop: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 21,
    color: '#242424',
  },
  descr: {
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 13.5,
    color: '#727272',
    marginTop: -0,
    marginBottom: 5,
  },
});
