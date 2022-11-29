import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Gap, HeaderPrimary, TextInput} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  saveDataPemesanan,
  saveDataTotalDataPemesanan,
  saveDataUser,
} from '../../redux/action';
import {useState} from 'react';
import {useEffect} from 'react';

const DataPemesan = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {dataUser} = useSelector(state => state.profileReducer);
  const {hotelDataPesan} = useSelector(state => state.productReducer);
  console.log('Data Pesan dari sini ', hotelDataPesan);
  console.log('route data pemesan', route.params);

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

  const handleTanggal = () => {
    let checkin = new Date(hotelDataPesan.data_checkin);
    let checkout = new Date(hotelDataPesan.data_checkout);
    let diffTime = Math.abs(checkout - checkin);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleTotal = () => {
    let total =
      handleTanggal() * hotelDataPesan.data_room * route.params.priceHotel;
    return total;
  };

  const handlePajak = () => {
    let pajak = handleTotal() * 0.1;
    return pajak;
  };

  const onHandleSubmitTotal = () => {
    let data = {
      total: handleTotal(),
      pajak: handlePajak(),
      totalBayar: handleTotal() + handlePajak(),
    };
    console.log('data total', data);
    dispatch(saveDataTotalDataPemesanan(data));
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
            <Text>
              {handleTanggal()}
              days, {hotelDataPesan.data_room} Room, {hotelDataPesan.data_tamu}{' '}
              Guest
            </Text>
            <Gap height={5} />
            <View style={styles.priceContent}>
              <Text style={styles.priceText}>Total Price</Text>
              <Text style={styles.priceText}>
                $
                {handleTotal()
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </Text>
            </View>
            <Gap height={5} />
            <View style={styles.priceContent}>
              <Text style={styles.priceText}>Pajak</Text>
              <Text style={styles.priceText}>${handlePajak()}</Text>
            </View>
          </View>
        </View>
        <View style={styles.pesan}>
          <Button text="Pesan Sekarang" onPress={onHandleSubmitTotal} />
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
