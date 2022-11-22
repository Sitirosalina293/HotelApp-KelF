import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Button, CardSearch, Gap, HomeWelcome, TourCard} from '../../components';
import TextHome2 from '../../components/atoms/TextHome2';
import tour from './../../assets/data/tour';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/action/auth';
import {useEffect} from 'react';
import {getMetaDataHotel, getMetaDataHotelV2} from '../../redux/action';
import { Lawangsewu1 } from '../../assets';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {hotel, isLoadingHotel} = useSelector(state => state.productReducer);
  // console.log('hotel :', hotel);
  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(
      getMetaDataHotel(),
      // getMetaDataHotelV2(),
    );
  }, []);

  return (
    <View style={styles.page}>
      <HomeWelcome navigation={navigation} />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <CardSearch />
        {/* <Button
          text="Logout"
          onPress={handleLogOut}
        /> */}

        <>
          <TextHome2 text="Top Destinasi" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.TourCardContainer}>
              <Gap width={5} />
              {hotel.map((item, index) => {
                return (
                  <TourCard
                    key={index}
                    images={
                      'https://images.trvl-media.com/mobiata/mobile/apps/ExpediaBooking/TabletDestinations/images/par.jpg'
                    }
                    // title={item.name}
                    title={item.name}

                  />
                );
              })}
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
