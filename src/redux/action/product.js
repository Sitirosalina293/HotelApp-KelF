import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {API_HOST} from '../../config/API';

export const getMetaDataHotel = () => async dispatch => {
  try {
    dispatch({
      type: 'SET_LOADING_HOTEL',
      payload: true,
    });
    const res = await Axios.get(`${API_HOST.urlHotelV1}v1/hotels/locations`, {
      params: {name: 'Indonesia', search_type: 'HOTEL'},
      headers: {
        'x-rapidapi-key': '643f43a215msh069d3763f10ab69p11c762jsnce9957255f7f',
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
            '643f43a215msh069d3763f10ab69p11c762jsnce9957255f7f',
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
    console.log('Data pesan masuk', data);
  } catch (e) {
    console.log('Error save data pesan', e);
  }
};

export const saveDataTotalDataPemesanan = data => async dispatch => {
  try {
    AsyncStorage.setItem('dataTotalPemesanan', JSON.stringify(data));
    dispatch({
      type: 'GET_TOTAL_MONEY',
      payload: data,
    });
    console.log('Data total pesan masuk', data);
  } catch (e) {
    console.log('Error save data pesan', e);
  }
};

export const saveDataHistoryCheckOut = data => async dispatch => {
  try {
    AsyncStorage.setItem('dataHistoryCheckOut', JSON.stringify(data));
    dispatch({
      type: 'GET_HISTORY_CHECKOUT',
      payload: data,
    });
    console.log('Data history checkout masuk', data);
  } catch (e) {
    console.log('Error save data pesan', e);
  }
};
