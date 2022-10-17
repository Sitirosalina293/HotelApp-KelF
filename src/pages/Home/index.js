import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Gap, HomeTabSection, HomeWelcome, TourCard} from '../../components';
import {TourDummy1, TourDummy2, TourDummy3} from '../../assets';
import SearchBarHome from '../../components/atoms/SearchIcon';
import TextHome2 from '../../components/atoms/TextHome2';
import tour from './../../assets/data/tour';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeWelcome />
        <View style={{marginHorizontal: 12, marginVertical: 20}}>
          <SearchBarHome placeholder="Cari destinasimu ?" />
        </View>
        <Gap width={100} />
        <TextHome2 text="Paling Populer" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.TourCardContainer}>
            <Gap width={5} />

            {tour.data.map((dataTour, index) => (
              <TourCard
                key={index}
                images={dataTour.image}
                onPress={() =>
                  navigation.navigate('TourDetail', {
                    data: dataTour,
                  })
                }
                title={dataTour.name}
              />
            ))}

            <Gap width={5} />
          </View>
        </ScrollView>
        <View style={styles.tabContainer}>
          <HomeTabSection data={tour} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabContainer: {
    flex: 1.3,
    backgroundColor: 'white',
  },
  TourCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  contentSearch: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: 25,
    marginTop: 25,
  },
});
