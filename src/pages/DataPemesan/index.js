import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Gap, HeaderPrimary, TextInput} from '../../components';
import {useNavigation} from '@react-navigation/native';

const DataPemesan = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary type="header-secondary" />
      <View style={styles.content}>
        <View style={styles.user}>
          <Text style={styles.title}>Data Pemesan</Text>
          <TextInput
            title="Nama Lengkap"
            placeholder={'Masukkan Nama Lengkap'}
          />
          <TextInput title="Email" placeholder={'Masukkan Email'} />
          <TextInput
            title="No. Handphone"
            placeholder={'Masukkan No. Handphone'}
          />
        </View>
        <View style={styles.price}>
          <Text style={styles.title}>Detail Transaksi</Text>
          <Gap height={20} />
          <View style={styles.contentPrice}>
            <Text>3 days, 1 Room, 2 Guest</Text>
            <Gap height={5} />
            <View style={styles.priceContent}>
              <Text style={styles.priceText}>Total Price</Text>
              <Text style={styles.priceText}>Rp. 100.000</Text>
            </View>
            <Gap height={5} />
            <View style={styles.priceContent}>
              <Text style={styles.priceText}>Pajak</Text>
              <Text style={styles.priceText}>Rp. 10.000</Text>
            </View>
          </View>
        </View>
        <View style={styles.pesan}>
          <Button
            text="Pesan Sekarang"
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DataPemesan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  user: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  price: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  priceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pesan: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  // card content price
    contentPrice: {
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 24,
        paddingVertical: 24,
        borderRadius: 10,
    },
});
