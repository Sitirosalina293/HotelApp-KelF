import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
import {
  BigCardTour,
  CardSearch,
  Gap,
  HomeWelcome,
  TourCard,
} from '../../components';
import TextHome2 from '../../components/atoms/TextHome2';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {getMetaDataHotel} from '../../redux/action';
import {API_HOST} from '../../config/API';
import Axios from 'axios';
import moment from 'moment/moment';
import {SafeAreaView} from 'react-native';
import {showMessage} from '../../utils';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {hotel} = useSelector(state => state.productReducer);
  const {hotelData} = useSelector(state => state.productReducer);
  const {savedNews} = useSelector(state => state.productReducer);

  const {hotelDataDate} = useSelector(state => state.productReducer);
  console.log('hotelDataDate : ', hotelDataDate);

  const [inputCity, setInputCity] = useState('Yogyakarta');
  const [inputStartDate, setInputStartDate] = useState(new Date());
  const [inputEndDate, setInputEndDate] = useState(
    new Date(
      inputStartDate.getFullYear(),
      inputStartDate.getMonth(),
      inputStartDate.getDate() + 1,
    ),
  );

  const handleConfirmSearch = () => {
    searchCity(inputCity);
    showMessage('Search Success', 'success');
  };

  const handleAddToSaved = item => {
    dispatch({type: 'addToSaved', payload: savedNews});
  };
  const handleRemoveFromSaved = item => {
    dispatch(removeFromSaved(item));
  };

  const searchCity = async (inputCity) => {
    const response = await Axios.get(
      `${API_HOST.urlHotelV1}v1/hotels/locations`,
      {
        params: {
          search_type: 'HOTEL',
          name: inputCity,
        },
        headers: {
          'x-rapidapi-key':
            'cd67b63605msh1bdeae6089258a4p1ddd35jsn8918e18e3f84',
          'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
        },
      },
    );

    if (response.data[0].cityID) {
      searchHotelByCity(response.data[0].cityID);
      console.log('city id if', response.data[0].cityID);
    } else {
      searchCity();
      console.log('city id else', response.data[0].cityID);
    }
  };
  const searchHotelByCity = async cityId => {
    const data_checkin = moment(inputStartDate).format('YYYY-MM-DD');
    const data_checkout = moment(inputEndDate).format('YYYY-MM-DD');
    const response = await Axios.get(`${API_HOST.urlHotelV1}v1/hotels/search`, {
      params: {
        location_id: cityId,
        date_checkin: data_checkin,
        date_checkout: data_checkout,
        sort_order: 'STAR',
      },
      headers: {
        'x-rapidapi-key': 'cd67b63605msh1bdeae6089258a4p1ddd35jsn8918e18e3f84',
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
      },
    });
    const hotelData = response.data.hotels.filter((hotel, idx) => {
      if (idx < 10) {
        return hotel.hotelId && hotel.thumbnailUrl && hotel.media.url;
      }
    });
    dispatch({type: 'GET_HOTEL_DATA', payload: hotelData});
    dispatch({
      type: 'GET_HOTEL_DATA_DATE',
      payload: {data_checkin, data_checkout},
    });
  };

  const getDetailHotel = async (hotelId, priceHotel) => {
    try {
      const response = await Axios.get(
        `${API_HOST.urlHotelV1}v1/hotels/details`,
        {
          params: {
            hotel_id: hotelId,
          },
          headers: {
            'X-RapidAPI-Key':
              'cd67b63605msh1bdeae6089258a4p1ddd35jsn8918e18e3f84',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com',
          },
        },
      );
      dispatch({type: 'GET_HOTEL_DETAIL', payload: response.data});
      console.log('id dan harga', hotelId, priceHotel);
      navigation.navigate('TourDetail', {hotelId, priceHotel});
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleClickItemCard = (id, price) => {
    getDetailHotel(id, price);
  };

  useEffect(() => {
    dispatch(getMetaDataHotel());
    searchCity();
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <HomeWelcome navigation={navigation} />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <CardSearch
          setInputCity={setInputCity}
          setStartDate={setInputStartDate}
          setLastDate={setInputEndDate}
          handleConfirmSearch={handleConfirmSearch}
          inputCity={inputCity}
          startDate={inputStartDate}
          lastDate={inputEndDate}
        />
        <>
          <TextHome2 text="Kota di Indonesia" />
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
                    title={item.cityName}
                    onPress={() => searchCity(item.cityName)}
                  />
                );
              })}
              <Gap width={5} />
            </View>
          </ScrollView>
        </>
        <View style={styles.contentSearch}>
          <Text style={styles.text}>Populer di {inputCity}</Text>
        </View>
        <View
          style={{
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {hotelData.map((hotel, index) => {
            return (
              <BigCardTour
                key={index}
                Image={{
                  uri: hotel.media.url,
                }}
                name={hotel.name}
                rating={hotel.starRating}
                price={hotel.ratesSummary.minPrice}
                onPress={() =>
                  handleClickItemCard(
                    hotel.hotelId,
                    hotel.ratesSummary.minPrice,
                  )
                }
                onHandleFavorite={() => {
                  savedNews.find(hotel => hotel.name === hotel.name)
                    ? handleRemoveFromSaved(hotel)
                    : handleAddToSaved(hotel);
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
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
  text: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 15,
    color: '#1D2132',
    fontStyle: 'normal',
  },
});
