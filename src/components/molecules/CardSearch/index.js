import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Button, Gap, SearchBar } from '../../atoms';
import { ProfileOff } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const CardSearch = () => {

    const navigation = useNavigation();
  return (
    <View style={styles.searchBar}>
      <SearchBar placeholder="Cari destinasimu ?" />
      <Gap height={16} />
      <View style={styles.inputDate}>
        <Button
          type="checkDate"
          text="Check In Date"
          icon="https://cdn-icons-png.flaticon.com/512/747/747479.png"
        />
        <Button
          type="checkDate"
          text="Check Out Date"
          icon="https://cdn-icons-png.flaticon.com/512/747/747479.png"
        />
      </View>
      <Gap height={16} />
      <View style={styles.countGuest}>
        <View style={styles.guest}>
          <ProfileOff />
          <Gap width={10} />
          <Text>Guest</Text>
        </View>
        <View style={styles.coundDown}>
          <Button type="CountGuest" text="(+)" />
          <Gap width={10} />
          <Button type="CountGuest" text="(-)" />
        </View>
      </View>
      <Gap height={16} />
      <Button text="Search" 
        onPress={() => navigation.navigate('Search')} />
      
    </View>
  );
};

export default CardSearch;

const styles = StyleSheet.create({
  // search
  searchBar: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  inputDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  guest: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countGuest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  coundDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // icon
  iconCheck: {
    width: 20,
    height: 20,
  },
});
