import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import { Alert } from 'react-native';
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
        'x-rapidapi-key': '1b7dd0c183mshee645b691cff88fp11ac22jsnd27bfbd8c411',
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
            '1b7dd0c183mshee645b691cff88fp11ac22jsnd27bfbd8c411',
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

    await AsyncStorage.getItem('dataHistoryCheckOut').then(async (dataHistorySource) => {

      dataHistorySource = dataHistorySource ?? "[]";
      let dataHistory = JSON.parse(dataHistorySource);

      if (Array.isArray(dataHistory)) {

        dataHistory = dataHistory.filter((item) => item && typeof item == "object");

        console.log("TESTING", dataHistory);
  
        dataHistory.push(data);
  
        return await AsyncStorage.setItem('dataHistoryCheckOut', JSON.stringify(dataHistory)).then(() => {
  
          dispatch({
            type: 'GET_HISTORY_CHECKOUT',
            payload: dataHistory,
          });
        });
      }

      return null;
    });

  } catch (e) {

    console.log('Error save data pesan', e);
  }
};
