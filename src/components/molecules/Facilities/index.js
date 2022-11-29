import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcMart, IcMouseque, IcParkir, IcResto, IcToilet} from '../../../assets';
import {ScrollView} from 'react-native';
import {Gap} from '../../atoms';
import {useSelector} from 'react-redux';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;


const Facility = () => {
  const {hotelDetail} = useSelector(state => state.productReducer);
  console.log('Facility : ', hotelDetail.hotelFeatures.features);
  // console.log('Data fasilitas : ', hotelDetail.facilities);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.contentIc}>
      {hotelDetail.hotelFeatures.features.map((item, index) => {
        return (
          <View style={styles.border} key={index}>
            <Text style={styles.text}>{item}</Text>
            <Gap width={10} />
          </View>
        );
      })}
      {/* <View style={styles.border}>
        <Text style={styles.text}>Daily disinfection</Text>
      </View> */}
    </ScrollView>
  );
};

export default Facility;

const styles = StyleSheet.create({
  contentIc: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  border: {
    borderRadius: 10,
    paddingHorizontal: 10,
    maxWidth: screenWidth / 3.5,
    height: 55 ,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
