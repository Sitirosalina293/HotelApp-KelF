import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {CardSearch, Gap, HomeWelcome, TourCard} from '../../components';
import TextHome2 from '../../components/atoms/TextHome2';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {getMetaDataHotel, getMetaDataHotelV2} from '../../redux/action';
import Feed from '../../components/molecules/Feed/feed';
import {API_HOST} from '../../config/API';
import Axios from 'axios';


const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {hotel} = useSelector(state => state.productReducer);

  const [inputCity, setInputCity] = useState('Yogyakarta');
  const [inputStartDate, setInputStartDate] = useState(new Date());
  const [inputEndDate, setInputEndDate] = useState(new Date());
  const [hotels, setHotels] = useState([])
  const [feeds, setFeeds] = useState([])

  const handleConfirmSearch = () => {
    searchCity();
    getHotelSugestion();
  };

  const searchCity = async () => {
    const response = await Axios.get(`${API_HOST.urlHotelV1}v1/hotels/locations`, {
      params: {
        search_type: HOTEL,
        name: inputCity,
      },
      headers: {
        'x-rapidapi-key': 'a036817ddcmsh0dc2cb755d4902dp1b7f71jsna5991020006e',
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
      },
    });

    if (response.data[0].cityID) {
      searchHotelByCity(response.data[0].cityID);
    } else {
      searchCity();
    }
  };
  const searchHotelByCity = async cityId => {
    const response = await Axios.get(`${API_HOST.urlHotelV1}v1/hotels/search`, {
      params: {
        date_checkin: inputStartDate,
        location_id: cityId,
        date_checkout: inputEndDate,
        sort_order: 'STAR',
      },
      headers: {
        'x-rapidapi-key': 'a036817ddcmsh0dc2cb755d4902dp1b7f71jsna5991020006e',
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
      },
    });

    const hotelData = response.data.hotels.filter((hotel, idx) => {
      if (idx < 10) {
        return hotel.hotelId && hotel.thumbnailUrl && hotel.media.url;
      }
    });
    setHotels(hotelData);
  };

  const getHotelSugestion = async () => {
    const response = await Axios.get(`${API_HOST.urlHotelV1}v2/hotels/autoSuggest`, {
      params: {
        string: inputCity,
        get_hotels: true,
        max_results: 7,
      },
      headers: {
        'x-rapidapi-key': 'a036817ddcmsh0dc2cb755d4902dp1b7f71jsna5991020006e',
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
      },
    });

    const sugestionHotels = {
      title: 'POPULAR HOTELS',
      items: response.data.getHotelAutoSuggestV2.results.result.hotels,
    };
    setFeeds([sugestionHotels]);
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
            <View style={{ marginBottom: 20 }}>
                {
                    feeds && feeds.map((feed, idx) => <Feed key={idx} title={feed.title} items={feed.items} />)
                }
            </View>
            <View style={{ marginBottom: 20 }}>
                {
                    hotels && hotels.map((hotel) =>
                        <ItemCard
                            key={hotel.hotelId}
                            id={hotel.hotelId}
                            hotel={hotel}
                            name={hotel.name}
                            rating={hotel.starRating}
                            price={hotel.ratesSummary.minPrice}
                            image={hotel.media.url}
                            city={hotel.location.address.cityName.split(' ').pop()}
                            isFavorited={isFavorited(hotel.hotelId)}
                            handleClickItemCard={handleClickItemCard}
                            handleClickFavorite={handleClickFavorite}
                        />)
                }
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
