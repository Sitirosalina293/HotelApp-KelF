import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Gap, HeaderPrimary, ItemHistory} from '../../components';
import {ScrollView} from 'react-native';
import TourListCard from '../../components/molecules/TourListCard';
import tour from './../../assets/data/tour';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary type="header-secondary" />
      <Gap height={20} />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>History</Text>
          <Text style={styles.txtDesc}>
            History transaksi kamu akan tampil disini
          </Text>
        </View>
        <Gap height={20} />
        <ItemHistory
          image={
            'https://asset.kompas.com/crops/6CW7Ulw_xPM9zwlXV1BqaIlYO3c=/101x62:993x657/750x500/data/photo/2021/12/26/61c856e20fa07.png'
          }
          name={'Bromo'}
          location={'Malang'}
          price={'20K'}
          rating={4}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: '#1D2132',
  },
  txtDesc: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Raleway-Regular',
    color: '#7C7C8C',
    lineHeight: 24,
  },
});
