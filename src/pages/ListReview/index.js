import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Gap,
  HeaderPrimary,
  ItemHistory,
  ItemListWisata,
  ItemReview,
} from '../../components';
import {ScrollView} from 'react-native';
import TourListCard from '../../components/molecules/TourListCard';
import tour from './../../assets/data/tour';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {saveDataHistoryCheckOut, saveDataHistoryReview} from '../../redux/action';
import {useEffect} from 'react';

const ListReview = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataSaveHistoryReview} = useSelector(state => state.productReducer);
  console.log('dataSaveHistoryReview 2 : ', dataSaveHistoryReview);

  const onHandleReview = item => {
    console.log('item on handle rev: ', item);
    dispatch({type: 'GET_SAVE_HISTORY_DETAIL_REVIEW', payload: item});
    navigation.navigate('HistoryReview');
  };

//   useEffect(() => {
//     dispatch(saveDataHistoryReview());
//   }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary type="header-secondary" />
      <Gap height={20} />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>History Review</Text>
          <Text style={styles.txtDesc}>
            History transaksi kamu akan tampil disini
          </Text>
        </View>
        <Gap height={20} />
        {dataSaveHistoryReview &&
          dataSaveHistoryReview.reverse().map((item, index) => {
            console.log('item : ', item);
            return (
              <ItemReview
                key={index}
                image={item.data.image}
                name={item.data.name}
                location={item.data.city}
                rating={item.data.rating}
                onPress={() => onHandleReview(item)}
              />
            );
          })}
        {/* <ItemReview
          image="https://digital.ihg.com/is/image/ihg/staybridge-suites-irvine-6723805112-4x3"
          name="Bali"
          location="Indonesia"
          rating={4}
          // onPress={() => navigation.navigate('Review')}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListReview;

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
