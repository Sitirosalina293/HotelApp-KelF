import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import {Gap, TicketTabSection} from '../../components';

const Ticket = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 25}}>
        <Text style={styles.title}>My Tiket</Text>
        <Gap height={10} />
        <Text style={styles.desc}>Tiket pembelian anda</Text>
        <Gap height={60} />
      </View>
      <View style={styles.status}>
        <TicketTabSection />
      </View>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 25,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: 'Raleway-Bold',
    color: '#44CFCB',
  },
  desc: {
    fontFamily: 'Raleway-Light',
    color: '#8D92A3',
    fontSize: 14,
  },
  status: {
    flex: 1,
    marginHorizontal: 25,
  },
});
