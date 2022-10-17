import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack2} from '../../../assets';

const NavigationBack = ({
  title = 'Pesan Tiket',
  desc = 'Nikmati liburan kamu !',
  onPress,
}) => {
  return (
    <View style={styles.navigation}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={onPress}>
          <IcBack2 />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

export default NavigationBack;

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
    marginTop: 15,
  },
  text: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Raleway-Regular',
  },
  desc: {
    fontSize: 12,
    color: '#8D92A3',
    fontFamily: 'Raleway-Regular',
  },
});
