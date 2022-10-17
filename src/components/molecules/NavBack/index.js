import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack2} from '../../../assets';

const NavBack = ({onPress, text, style}) => {
  return (
    <View style={styles.navigation}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={onPress}>
          <IcBack2 />
        </TouchableOpacity>
      </View>
      <View style={style}>
        <Text style={styles.title}>{text}</Text>
      </View>
    </View>
  );
};

export default NavBack;

const styles = StyleSheet.create({
    navigation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 100,
    },
    icon: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Raleway-SemiBold',
        color: '#1D2132',
    },

});
