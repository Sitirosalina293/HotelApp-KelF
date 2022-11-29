import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { IcSuccess } from '../../assets';
import { Button } from '../../components';

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <IcSuccess />
      <View style={styles.title}>
        <Text style={styles.bodyTitle}>Yeay! Booking Complite</Text>
      </View>
      <View style={styles.child}>
        <Text style={styles.childText}>
          Anda berhasil membooking tiket gak perlu antri lagi deh Selamat
          bersenang-senang
        </Text>
      </View>
      <Button
        text="Home"
        onPress={() => navigation.replace('MainApp')}
      />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    title: {
        marginTop: 20,
        marginBottom: 20,
        width: 168,      
    },
    bodyTitle: {
        fontSize: 20,
        fontFamily: 'Raleway-SemiBold',
        color: '#1D2132',
        textAlign: 'center',
    },
    child: {
        marginHorizontal: 40,
        marginVertical: 27,
        width: 267,
    },
    childText: {
        fontSize: 14,
        fontFamily: 'Raleway-Regular',
        color: '#8D92A3',
        textAlign: 'center',
    },
});
