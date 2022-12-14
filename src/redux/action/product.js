import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {Alert} from 'react-native';
import {API_HOST} from '../../config/API';
import {showMessage} from '../../utils';

export const getMetaDataHotel = () => async dispatch => {
  try {
    dispatch({
      type: 'SET_LOADING_HOTEL',
      payload: true,
    });
    const res = await Axios.get(`${API_HOST.urlHotelV1}v1/hotels/locations`, {
      params: {name: 'Indonesia', search_type: 'HOTEL'},
      headers: {
        'x-rapidapi-key': 'cd67b63605msh1bdeae6089258a4p1ddd35jsn8918e18e3f84',
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
      },
    });
    if (res) {
      dispatch({
        type: 'GET_HOTEL',
        payload: res.data,
      });
      console.log('res', res.data);
    }
  } catch (e) {
    dispatch({
      type: 'SET_LOADING_HOTEL',
      payload: false,
    });
    console.log('Error fetch data :', e);
  }
};

export const getDetailHotel = async hotelId => {
  try {
    const response = await Axios.get(
      `${API_HOST.urlHotelV1}v1/hotels/details`,
      {
        params: {
          hotel_id: '49203203',
        },
        headers: {
          'X-RapidAPI-Key':
            'cd67b63605msh1bdeae6089258a4p1ddd35jsn8918e18e3f84',
          'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com',
        },
      },
    );
    dispatch({type: 'GET_HOTEL_DETAIL', payload: response.data});
    navigation.navigate('DetailHotel');
    // navigation.navigate('DetailHotel', response.data);
  } catch (error) {
    console.log('error', error);
  }
};

export const saveDataPesan = data => async dispatch => {
  try {
    AsyncStorage.setItem('dataPesan', JSON.stringify(data));
    dispatch({
      type: 'GET_HOTEL_DATA_PESAN',
      payload: data,
    });
    showMessage('Data berhasil disimpan', 'success');
  } catch (e) {
    showMessage('Data gagal disimpan', 'danger');
  }
};

export const saveDataTotalDataPemesanan = (id, data, tanggal) => async dispatch => {
  console.log('id', id);
  console.log('Data total masuk', data);
  console.log('Tanggal masuk', tanggal);
  try {
    const res = await Axios.get(
      `${API_HOST.urlHotelV1}v1/hotels/booking-details`,
      {
        params: {
          date_checkin: tanggal.checkin,
          date_checkout: tanggal.checkout,
          hotel_id: id.hotelId,
          rooms_number: data.data_room,
        },
        headers: {
          'X-RapidAPI-Key':
            'cd67b63605msh1bdeae6089258a4p1ddd35jsn8918e18e3f84',
          'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com',
        },
      );
      if (res) {
        AsyncStorage.setItem('dataTotal', JSON.stringify(res.data));
        dispatch({
          type: 'GET_HOTEL_DATA_PESAN',
          payload: res.data,
        });
        showMessage('Data berhasil disimpan', 'success');
      }
    } catch (e) {
      showMessage('Data gagal disimpan');
    }
  };

export const saveDataHistoryCheckOut = data => async dispatch => {
  try {
    await AsyncStorage.getItem('dataHistoryCheckOut').then(
      async dataHistorySource => {
        dataHistorySource = dataHistorySource ?? '[]';
        let dataHistory = JSON.parse(dataHistorySource);
        if (Array.isArray(dataHistory)) {
          dataHistory = dataHistory.filter(
            item => item && typeof item == 'object',
          );
          dataHistory.push(data);
          return await AsyncStorage.setItem(
            'dataHistoryCheckOut',
            JSON.stringify(dataHistory),
          ).then(() => {
            dispatch({
              type: 'GET_HISTORY_CHECKOUT',
              payload: dataHistory,
            });
          });
        }
        return null;
      },
    );
  } catch (e) {
    console.log('Error save data pesan', e);
  }
};

export const saveDataHistoryReview = data => async dispatch => {
  try {
    await AsyncStorage.getItem('dataHistoryReview').then(
      async dataHistorySource => {
        dataHistorySource = dataHistorySource ?? '[]';
        let dataHistory = JSON.parse(dataHistorySource);
        if (Array.isArray(dataHistory)) {
          dataHistory = dataHistory.filter(
            item => item && typeof item == 'object',
          );
          dataHistory.push(data);
          return await AsyncStorage.setItem(
            'dataHistoryReview',
            JSON.stringify(dataHistory),
          ).then(() => {
            dispatch({
              type: 'GET_SAVE_HISTORY_REVIEW',
              payload: dataHistory,
            });
            showMessage('Data review berhasil disimpan', 'success');
          });
        }
        return null;
      },
    );
  } catch (e) {
    console.log('Error save data pesan', e);
  }
};
export const savedNews = data => async dispatch => {
  try {
    await AsyncStorage.getItem('savedNews').then(
      async dataFav => {
        dataFav = dataFav ?? '[]';
        let dataHistory = JSON.parse(dataFav);
        if (Array.isArray(dataFav)) {
          dataFav = dataFav.filter(
            item => item && typeof item == 'object',
          );
          dataFav.push(data);
          return await AsyncStorage.setItem(
            'data Fav',
            JSON.stringify(dataFav),
          ).then(() => {
            dispatch({
              type: 'addToSaved',
              payload: addToSaved,
            });
          });
        }
        return null;
      },
    );
  } catch (e) {
    console.log('Error save data pesan', e);
  }
};

export const saveDataFavorite = hotel => async dispatch => {
  try {
    await AsyncStorage.getItem('dataFavorite').then(
      async dataFavoriteSource => {
        dataFavoriteSource = dataFavoriteSource ?? '[]';
        let dataFavorite = JSON.parse(dataFavoriteSource);
        if (Array.isArray(dataFavorite)) {
          dataFavorite = dataFavorite.filter(
            item => item && typeof item == 'object',
          );
          dataFavorite.push(hotel);
          return await AsyncStorage.setItem(
            'dataFavorite',
            JSON.stringify(dataFavorite),
          ).then(() => {
            dispatch({
              type: 'addToSaved',
              payload: dataFavorite,
            });
            showMessage('Data berhasil disimpan', 'success');
          });
        }
        return null;
      },
    );
  } catch (e) {
    console.log('Error save data pesan', e);
  }
};

export const saveUnFavorite = hotel => async dispatch => {
  try {
    // delete data from array favorite
    await AsyncStorage.getItem('dataFavorite').then(
      async dataFavoriteSource => {
        dataFavoriteSource = dataFavoriteSource ?? '[]';
        let dataFavorite = JSON.parse(dataFavoriteSource);
        if (Array.isArray(dataFavorite)) {
          dataFavorite = dataFavorite.filter(
            item => item && typeof item == 'object',
          );
          dataFavorite.pop(hotel);
          return await AsyncStorage.setItem(
            'dataFavorite',
            JSON.stringify(newDataFavorite),
          ).then(() => {
            dispatch({
              type: 'addToSaved',
              payload: newDataFavorite,
            });
            showMessage('Data berhasil dihapus', 'success');
          });
        }
        return null;
      },
    );
  } catch (e) {
    console.log('Error save data pesan', e);
  }
};
