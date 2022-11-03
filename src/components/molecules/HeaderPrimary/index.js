import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IcBack, ProfileDummy} from '../../../assets';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderPrimary = ({type}) => {
  const navigation = useNavigation();
  if (type === 'header-secondary') {
    return (
      <View style={styles.second}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
        >
          <IcBack />
        </TouchableOpacity>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
    );
  }

  return (
    <View style={styles.profileContainer}>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HeaderPrimary;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  second: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  profile: {
    width: 50,
  },
});
