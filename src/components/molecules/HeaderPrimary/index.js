import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IcBack, IcBack2, ProfileDummy} from '../../../assets';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HeaderPrimary = ({type, Title}) => {
  const navigation = useNavigation();
  if (type === 'header-secondary') {
    return (
      <View style={styles.second}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack />
        </TouchableOpacity>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
    );
  }

  if (type === 'header-setting') {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack2 />
        </TouchableOpacity>
        <Text style={styles.textHeader}>{Title}</Text>
        <View></View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#44CFCB',
  },
  textHeader: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    letterSpacing: 1,
  },
});
