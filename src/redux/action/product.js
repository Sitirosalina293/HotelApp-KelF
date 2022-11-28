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
        'x-rapidapi-key': 'eab1b476ccmshf28baa51f4a8220p18a8e6jsn8ecdbb3ae82d',
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