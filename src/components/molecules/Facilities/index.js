import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcMart, IcMouseque, IcParkir, IcResto, IcToilet} from '../../../assets';
import { ScrollView } from 'react-native';
import { Gap } from '../../atoms';

const Facility = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contentIc}>
      <View style={styles.border}>
        <IcParkir />
      </View>
      <Gap width={10} />
      <View style={styles.border}>
        <IcMouseque />
      </View>
      <Gap width={10} />
      <View style={styles.border}>
        <IcToilet />
      </View>
      <Gap width={10} />
      <View style={styles.border}>
        <IcResto />
      </View>
      <Gap width={10} />
      <View style={styles.border}>
        <IcMart />
      </View>
    </ScrollView>
  );
};

export default Facility;

const styles = StyleSheet.create({
  contentIc: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  
  border: {
    borderRadius: 10,
    padding: 20,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
  },
});
