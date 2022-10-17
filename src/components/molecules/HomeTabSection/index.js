import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {TourDummy1, TourDummy2, TourDummy3} from '../../../assets';
import TextHome from '../../atoms/TextHome';
import TourListCard from '../TourListCard';

// props data is data tour
const HomeTabSection = ({data}) => {
  return (
    <View style={{paddingTop: 8}}>
      <TextHome />
      <ScrollView vertical nestedScrollEnabled={true}>
        {data.data.map((dataTour, index) => (
          <TourListCard key={index} image={dataTour.image} tour={dataTour} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeTabSection;
const styles = StyleSheet.create({});
