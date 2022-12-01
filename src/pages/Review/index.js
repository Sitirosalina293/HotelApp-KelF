import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Gap, HeaderPrimary, TextInput} from '../../components';
import {Image} from 'react-native';
import Rating from '../../components/molecules/Rating';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import { saveDataHistoryReview } from '../../redux/action';

const Review = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataHistoryToReview} = useSelector(state => state.productReducer);
  const {dataSaveHistoryReview} = useSelector(state => state.productReducer);
  console.log('dataHistoryToReview : ', dataHistoryToReview);
  console.log('dataSaveHistoryReview 1 : ', dataSaveHistoryReview);

  const [ulasan, setUlasan] = useState('');

  const onHandleSubmitUlasan = () => {
    // console.log('dataHistoryToReview : ', dataHistoryToReview);
    // console.log('ulasan : ', ulasan);
    let dataSubmit = {
        data: dataHistoryToReview,
        ulasan: ulasan,
    }
    console.log('dataSubmit : ', dataSubmit);
    dispatch(saveDataHistoryReview(dataSubmit));
    navigation.navigate('ListReview');
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary type="header-setting" Title="Review" />
      <Gap height={20} />
      <View style={styles.content}>
        <Image
          source={{
            uri: dataHistoryToReview.image,
          }}
          style={styles.image}
        />
        <Gap height={10} />
        <Text style={styles.title}>{dataHistoryToReview.name}</Text>
        <Gap height={10} />
        <Text style={styles.txtDesc}>{dataHistoryToReview.city}</Text>
        <Gap height={10} />
        <View style={styles.rating}>
          <Rating />
          <Text style={styles.txtRating}>{dataHistoryToReview.rating}</Text>
        </View>
      </View>
      <View style={styles.ulasan}>
        <TextInput
          placeholder="Tuliskan Ulasan Anda"
          style={styles.input}
          label="Ulasan"
          value={ulasan}
          onChangeText={value => setUlasan(value)}
        />
        <Gap height={20} />
        <Button
          text="Kirim"
          //   onPress={() => navigation.navigate('HistoryReview')}
          onPress={onHandleSubmitUlasan}
        />
      </View>
    </SafeAreaView>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  txtDesc: {
    fontSize: 14,
    color: '#000000',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ulasan: {
    paddingHorizontal: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#EAEAF0',
    borderRadius: 10,
    padding: 10,
  },
});
