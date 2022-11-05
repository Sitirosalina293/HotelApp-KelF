import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {CardSearch, Gap, HomeWelcome, TourCard} from '../../components';
import TextHome2 from '../../components/atoms/TextHome2';
import tour from './../../assets/data/tour';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HomeWelcome />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <CardSearch />
        <>
          <TextHome2 text="Top Destinasi" />
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
        </>
        <>
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
        </>
        <Gap height={20} />
      </ScrollView>
    </View>
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
