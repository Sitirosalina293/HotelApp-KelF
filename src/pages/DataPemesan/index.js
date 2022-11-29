import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Gap, HeaderPrimary, TextInput} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {saveDataPemesanan, saveDataUser} from '../../redux/action';
import {useState} from 'react';
import {useEffect} from 'react';

const DataPemesan = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {dataUser} = useSelector(state => state.profileReducer);
  const [phoneData, setPhoneData] = useState(dataUser.phone);
  const onHandleSubmit = () => {
    let data = {
      email: dataUser.email,
      gender: dataUser.gender,
      fullname: dataUser.fullname,
      phone: phoneData,
    };
    console.log('data yang dikirim', data);
    dispatch(saveDataUser(data));
    navigation.navigate('Checkout');
  };

  // useEffect(() => {
  //   console.log('dataUser', dataUser);
  // }, [dataUser]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary type="header-setting" />
      <View style={styles.content}>
        <View style={styles.user}>
          <Text style={styles.title}>Data Pemesan</Text>
          <TextInput
            title="Nama Lengkap"
            placeholder={'Masukkan Nama Lengkap'}
            value={dataUser && dataUser.fullname ? dataUser.fullname : 'Empty'}
            onChangeText={
              dataUser && dataUser.fullname ? dataUser.fullname : 'Empty'
            }
            editable={false}
          />
          <TextInput
            title="Email"
            placeholder={'Masukkan Email'}
            value={dataUser && dataUser.email ? dataUser.email : 'Empty'}
            onChangeText={dataUser && dataUser.email ? dataUser.email : 'Empty'}
            editable={false}
          />
          <TextInput
            title="No. Handphone"
            placeholder={'Masukkan No. Handphone'}
            value={phoneData}
            onChangeText={value => setPhoneData(value)}
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
          <Button text="Pesan Sekarang" onPress={onHandleSubmit} />
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
