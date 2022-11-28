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
import {getMetaDataHotel, getMetaDataHotelV2} from '../../redux/action';
import Feed from '../../components/molecules/Feed/feed';
import {API_HOST} from '../../config/API';
import Axios from 'axios';
import moment from 'moment/moment';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {hotel} = useSelector(state => state.productReducer);

  const [inputCity, setInputCity] = useState('Yogyakarta');
  const [inputStartDate, setInputStartDate] = useState(new Date());
  const [inputEndDate, setInputEndDate] = useState(
    new Date(
      inputStartDate.getFullYear(),
      inputStartDate.getMonth(),
      inputStartDate.getDate() + 1,
    ),
  );
  const [hotels, setHotels] = useState([]);
  const [feeds, setFeeds] = useState([]);

  const handleConfirmSearch = () => {
    searchCity();
    getHotelSugestion();
    // console.log('inputCity', inputCity);
    // console.log('inputStartDate', inputStartDate);
    // console.log('inputEndDate', inputEndDate);
  };

  const searchCity = async () => {
    const response = await Axios.get(
      `${API_HOST.urlHotelV1}v1/hotels/locations`,
      {
        params: {
          search_type: 'HOTEL',
          name: inputCity,
        },
        headers: {
          'x-rapidapi-key':
            'eab1b476ccmshf28baa51f4a8220p18a8e6jsn8ecdbb3ae82d',
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
    // console.log('data_checkin', data_checkin);
    // console.log('data_checkout', data_checkout);
    const response = await Axios.get(`${API_HOST.urlHotelV1}v1/hotels/search`, {
      params: {
        location_id: cityId,
        date_checkin: data_checkin,
        date_checkout: data_checkout,
        sort_order: 'STAR',
      },
      headers: {
        'x-rapidapi-key': 'eab1b476ccmshf28baa51f4a8220p18a8e6jsn8ecdbb3ae82d',
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
      },
    });
    // console.log('response', response.data);
    const hotelData = response.data.hotels.filter((hotel, idx) => {
      if (idx < 10) {
        return hotel.hotelId && hotel.thumbnailUrl && hotel.media.url;
      }
    });
    setHotels(hotelData);
    console.log('hotelData', hotelData);
    // console.log('hotelData id', hotelData[0].hotelId);
    // console.log('hotelData thumbnailUrl', hotelData[0].thumbnailUrl);
  };

  const getHotelSugestion = async () => {
    console.log('city', inputCity);
    const response = await Axios.get(
      `${API_HOST.urlHotelV1}v2/hotels/autoSuggest`,
      {
        params: {
          // string: inputCity,
          string: 'Jakarta',
          spellcheck: 'true',
          get_pois: 'true',
          combine_regions: 'true',
          get_hotels: 'true',
        },
        headers: {
          'x-rapidapi-key':
            'eab1b476ccmshf28baa51f4a8220p18a8e6jsn8ecdbb3ae82d',
          'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
        },
      },
    );
    console.log('response', response.data);

    const sugestionHotels = {
      title: 'POPULAR HOTELS',
      items: response.data.getHotelAutoSuggestV2.results.result.hotels,
    };

    setFeeds([sugestionHotels]);
    console.log('sugestionHotels', sugestionHotels);
    console.log('Items : ', sugestionHotels.items);
  };

  const handleClickItemCard = (id, price) => {
    navigation.navigate('Detail', {hotelId: id, price: price});
  };

  const handleClickFavorite = (hotel, isFavorited) => {
    if (!isAuthenticated) {
      return navigation.navigate('Login');
    }
    isFavorited
      ? dispatch(REMOVE_FAVORITE_HOTEL(hotel))
      : dispatch(ADD_FAVORITE_HOTEL(hotel));
  };

  const isFavorited = id => {
    return favoriteHotels.some(hotel => hotel.hotelId === id);
  };

  useEffect(() => {
    dispatch(getMetaDataHotel());
    searchCity();
  }, []);

  return (
    <View style={styles.page}>
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
                  />
                );
              })}
              <Gap width={5} />
            </View>
          </ScrollView>
        </>
        <View style={{marginBottom: 20}}>
          <Text>Hello</Text>
        </View>
        <Gap height={20} />

        <View
          style={{
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BigCardTour
            Image={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_se6ZZSfhaINPRKS0hpJvDorSt7x7iYA5LOzOo1lSHV98Phdiy09scX2-njw-5T2dwjLM7bfq703gdQ-v-wiesQ',
            }}
            name="Jakarta Jakarta Jakarta Jakarta "
            price="Rp. 1.000.000"
            rating="4.5"
          />

          {hotels.map((hotel, index) => {
            return (
              <BigCardTour
                key={index}
                Image={{
                  uri: hotel.media.url,
                }}
                name={hotel.name}
                rating={hotel.starRating}
                price={hotel.ratesSummary.minPrice}
                // onPress={() => console.log('hello')}
              />
            );
          })}
        </View>
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
