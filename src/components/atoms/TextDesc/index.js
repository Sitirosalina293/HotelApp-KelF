import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextDesc = ({text}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.component}>Deskripsi</Text>
      <Text style={styles.component2}>{text}</Text>
    </View>
  );
};

export default TextDesc;

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    marginBottom: 5,
  },
  component: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 16,
    color: '#1D2132',
    fontStyle: 'normal',
  },
  component2: {
    fontFamily: 'Raleway-Regular',
    fontSize: 14,
    color: '#9A9A9A',
    fontStyle: 'normal',
    marginTop: 16,
    textAlign: 'left',
  },
});
