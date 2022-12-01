import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Gap, HeaderPrimary, TextInput} from '../../components';
import {Image} from 'react-native';
import Rating from '../../components/molecules/Rating';
import {useSelector} from 'react-redux';

const HistoryReview = ({navigation}) => {
  const {dataSaveHistoryDetailReview} = useSelector(
    state => state.productReducer,
  );
  console.log('dataSaveHistoryDetailReview : ', dataSaveHistoryDetailReview);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary type="header-setting" Title="History Review" />
      <Gap height={20} />
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://digital.ihg.com/is/image/ihg/staybridge-suites-irvine-6723805112-4x3',
          }}
          style={styles.image}
        />
        <Gap height={10} />
        <Text style={styles.title}>
          {dataSaveHistoryDetailReview.data.name}
        </Text>
        <Gap height={10} />
        <Text style={styles.txtDesc}>
          {dataSaveHistoryDetailReview.data.city}
        </Text>
        <Gap height={10} />
        <View style={styles.rating}>
          <Rating />
          <Text style={styles.txtRating}>
            {dataSaveHistoryDetailReview.data.rating}
          </Text>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.ulasan}>
        <Text style={styles.title}>Ulasan</Text>
        <Gap height={10} />
        <View style={styles.ulasanContent}>
          <Text style={styles.txtUlasan}>{dataSaveHistoryDetailReview.ulasan}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HistoryReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000000',
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
  txtRating: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 5,
  },
  txtUlasan: {
    fontSize: 14,
    color: '#000000',
  },
  ulasanContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderWidth: 1,
    borderColor: '#EAEAF0',
    borderRadius: 10,
    padding: 10,
  },
});
