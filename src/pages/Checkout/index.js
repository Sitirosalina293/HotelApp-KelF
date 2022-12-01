import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavBack from '../../components/molecules/NavBack';
import {Button, Gap, TextHome2} from '../../components';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { saveDataHistoryCheckOut } from '../../redux/action';
import { showMessage } from '../../utils';

const Checkout = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataUser} = useSelector(state => state.profileReducer);
  const {totalMoney} = useSelector(state => state.productReducer);
  const {hotelDataPesan} = useSelector(state => state.productReducer);
  const {hotelDetail} = useSelector(state => state.productReducer);
  const {dataCheckout} = useSelector(state => state.productReducer);
  const {saveDate} = useSelector(state => state.productReducer);

  const onHandleCheckOut = () => {
    let data = {
      name: hotelDetail.name,
      image: hotelDetail.images[0].imageUrl,
      city: hotelDetail.location.address.cityName,
      price: dataCheckout.priceHotel,
      rating: hotelDetail.starRating,
    };
    console.log('data yang dikirim', data);
    dispatch(saveDataHistoryCheckOut(data));
    showMessage('Checkout Success', 'success');
    navigation.navigate('Success');
  };

  return (
    <View style={styles.body}>
      <NavBack
        text="Pemesanan"
        onPress={() => navigation.navigate('PesanCheckOut')}
        style={styles.text}
      />
      <Gap height={24} />
      <TextHome2 text="Daftar Pesanan" />
      <View style={styles.content}>
        <Image
          source={{
            uri: hotelDetail.images[0].imageUrl,
          }}
          style={styles.image}
        />
        <View style={styles.contentText}>
          <Text style={styles.title}>{hotelDetail.name}</Text>
          <Text style={styles.price}>${dataCheckout.priceHotel}</Text>
        </View>
        <Text style={styles.total}>{hotelDataPesan.data_tamu} Person</Text>
      </View>
      <Gap height={24} />
      <View>
        <View style={styles.content2}>
          <Text style={styles.titleText}>Detail Transaksi</Text>
        </View>
        <View style={styles.content3}>
          <Text style={styles.titleText2}>Kota Lama Semarang</Text>
          <Text style={styles.priceText}>${totalMoney.total}</Text>
        </View>
        <View style={styles.content3}>
          <Text style={styles.titleText2}>Pajak 10%</Text>
          <Text style={styles.priceText}>${totalMoney.pajak}</Text>
        </View>
        <View style={styles.content3}>
          <Text style={styles.titleText2}>Total Price</Text>
          <Text style={[styles.priceText, styles.active]}>
            ${totalMoney.totalBayar}
          </Text>
        </View>
      </View>
      <Gap height={24} />
      <View>
        <View style={styles.content2}>
          <Text style={styles.titleText}>Pemesan</Text>
        </View>
        <View style={styles.content3}>
          <Text style={styles.titleText2}>Nama</Text>
          <Text style={styles.priceText}>
            {dataUser && dataUser.fullname ? dataUser.fullname : 'Empty'}
          </Text>
        </View>
        <View style={styles.content3}>
          <Text style={styles.titleText2}>No. Hp</Text>
          <Text style={styles.priceText}>
            {dataUser && dataUser.phone ? dataUser.phone : 'Empty'}
          </Text>
        </View>
        <View style={styles.content3}>
          <Text style={styles.titleText2}>Pengunjung</Text>
          <Text style={styles.priceText}>{hotelDataPesan.data_tamu} Orang</Text>
        </View>
        <View style={styles.content3}>
          <Text style={styles.titleText2}>Jadwal Kegiatan</Text>
          <Text style={styles.priceText}>
            {saveDate.checkin} - {saveDate.checkout}
          </Text>
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.content4}>
        <Button
          text="Batalkan"
          color="#CCCCCC"
          onPress={() => navigation.goBack()}
        />
        <Gap height={16} />
        <Button
          text="Pesan Sekarang"
          onPress={onHandleCheckOut}
        />
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  contentText: {
    marginRight: 100,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    color: '#1D2132',
  },
  price: {
    fontSize: 13,
    fontFamily: 'Raleway-Regular',
    color: '#8D92A3',
  },
  total: {
    fontSize: 13,
    fontFamily: 'Raleway-Regular',
    color: '#8D92A3',
  },
  content2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titleText: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 14,
    color: '#1D2132',
    fontStyle: 'normal',
  },
  content3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 6,
  },
  titleText2: {
    fontFamily: 'Raleway-Regular',
    fontSize: 14,
    color: '#8D92A3',
    fontStyle: 'normal',
  },
  priceText: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 14,
    color: '#1D2132',
    fontStyle: 'normal',
  },
  active: {
    color: '#1ABC9C',
  },
  content4: {
    marginHorizontal: 20,
    marginVertical: 6,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    marginRight: 150,
  },
});
