import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import NavigationBack from '../../components/molecules/NavigationBack';
import {Button, Gap, HeaderPrimary, TextInput} from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment/moment';
import {useEffect} from 'react';
import {saveDataPesan} from '../../redux/action';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';

const PesanCheckOut = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {hotelDataDate, hotelDataPesan} = useSelector(
    state => state.productReducer,
  );
  // console.log('hotelDataPesan : ', hotelDataPesan);
  console.log('route pesan co', route.params);

  const [tamu, setTamu] = useState(1);
  const [room, setRoom] = useState(1);

  const onHandleSubmit = () => {
    let data = {
      data_checkin: hotelDataDate.data_checkin,
      data_checkout: hotelDataDate.data_checkout,
      data_room: room,
      data_tamu: tamu,
    };
    dispatch(saveDataPesan(data));
    navigation.navigate('DataPemesan', route.params);
  };

  // useEffect(() => {
  //   console.log('Data Pesan', hotelDataPesan);
  // }, [hotelDataPesan]);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <HeaderPrimary type="header-setting" Title="Pesan" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Jadwal Kedatangan</Text>
          <View style={styles.frameDate}>
            <Text style={styles.tgl}>
              {moment(hotelDataDate.data_checkin).format('DD MMM YYYY')} -{' '}
              {moment(hotelDataDate.data_checkout).format('DD MMM YYYY')}
            </Text>
          </View>
        </View>
        <View style={styles.content2}>
          <Text style={styles.title2}>Jumlah Room</Text>
          <TextInput
            placeholder={tamu == 1 ? '1' : tamu + ' Kamar'}
            style={styles.TxtInput}
            value={room}
            onChangeText={value => setRoom(value)}
          />
          <Gap height={11} />
        </View>
        <View style={styles.content2}>
          <Text style={styles.title2}>Jumlah Tamu</Text>
          <TextInput
            placeholder={tamu == 1 ? '1' : tamu + ' Tamu'}
            style={styles.TxtInput}
            value={tamu}
            onChangeText={value => setTamu(value)}
          />
          <Gap height={11} />
        </View>

        <View style={styles.content3}>
          <Button text={'Pesan sekarang'} onPress={onHandleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PesanCheckOut;

const styles = StyleSheet.create({
  info: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  frameDate: {
    backgroundColor: '#E2E2E2',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  tgl: {
    fontSize: 17,
    fontFamily: 'Raleway-Semibold',
    color: '#8D92A3',
  },
  desc: {
    fontSize: 12,
    color: '#8D92A3',
    fontFamily: 'Raleway-Regular',
  },
  content: {
    marginHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginTop: 30,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
    color: '#1D2132',
    fontWeight: '700',
    marginBottom: 20,
    lineHeight: 30,
  },
  content2: {
    marginHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginTop: 30,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderRadius: 15,
  },
  title2: {
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
    color: '#1D2132',
    fontWeight: '700',
    lineHeight: 30,
  },
  btn1: {
    marginTop: 20,
    backgroundColor: '#F2F2F2',
  },
  content3: {
    marginHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  TxtInput: {
    borderWidth: 1,
    backgroundColor: '#E2E2E2',
    borderColor: '#DEDEDE',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
  },
});
