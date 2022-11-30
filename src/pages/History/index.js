import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Gap, HeaderPrimary, ItemHistory} from '../../components';
import {ScrollView} from 'react-native';
import TourListCard from '../../components/molecules/TourListCard';
import tour from './../../assets/data/tour';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { saveDataHistoryCheckOut } from '../../redux/action';
import { useEffect } from 'react';

const History = () => {
  const dispatch = useDispatch();
  const {dataHistoryCheckOut} = useSelector(state => state.productReducer);
  console.log('dataHistoryCheckOut : ', dataHistoryCheckOut);

  useEffect (() => {
    dispatch(saveDataHistoryCheckOut());
  }, []);

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
        {dataHistoryCheckOut &&
          dataHistoryCheckOut.reverse().map((item, index) => {
            return (
              <ItemHistory
                key={index}
                image={item.image}
                name={item.name}
                location={item.city}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
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
