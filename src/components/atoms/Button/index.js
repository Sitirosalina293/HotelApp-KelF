import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Gap from '../Gap';

const Button = ({
  text,
  color = '#44CFCB',
  textColor = '#fff',
  onPress,
  icon = '',
  type,
}) => {
  if (type === 'checkDate') {
    return (
      <TouchableOpacity style={styles.btnCheck} onPress={onPress}>
        <Image source={{uri: icon}} style={styles.iconCheck} />
        <Gap width={10} />
        <Text
          style={{
            fontSize: 14,
          }}
        >{text}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'CountGuest') {
    return (
      <TouchableOpacity style={styles.btnCount}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>
          {icon} {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: color => ({
    fontSize: 17,
    fontFamily: 'Raleway-Semibold',
    color: color,
    textAlign: 'center',
  }),
  btnCheck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  iconCheck: {
    width: 20,
    height: 20,
  },
  btnCount: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
});
