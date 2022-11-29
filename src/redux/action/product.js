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
        'x-rapidapi-key': 'c8f833335cmsh76837598cd508cfp19a8b6jsnd7ddb948f53e',
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
      },
    });
    if(res){
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
            'c8f833335cmsh76837598cd508cfp19a8b6jsnd7ddb948f53e',
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