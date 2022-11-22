import Axios from 'axios';
import {API_HOST} from '../../config/API';

// export const getMetaDataHotel = () => async dispatch => {
//   try {
//     dispatch({
//       type: 'SET_LOADING_HOTEL',
//       payload: true,
//     });
//     const res = await fetch(`${API_HOST.urlHotelV1}get-meta-data`, {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': '94f169d30fmsh4ab8da34c1256bep1354d7jsn393426a2a413',
//         'x-rapidapi-host': 'hotels4.p.rapidapi.com',
//       },
//     });
//     const data = await res.json();
//     if (data) {
//       dispatch({
//         type: 'GET_HOTEL',
//         payload: data,
//       });
//       console.log('data :', data);
//     }
//   } catch (e) {
//     dispatch({
//       type: 'SET_LOADING_HOTEL',
//       payload: false,
//     });
//     console.log('Error fetch data :', e);
//   }
// };

export const getMetaDataHotel = () => async dispatch => {
  try {
    dispatch({
      type: 'SET_LOADING_HOTEL',
      payload: true,
    });
    const res = await Axios.get(`${API_HOST.urlHotelV1}get-meta-data`, {
      headers: {
        'x-rapidapi-key': '94f169d30fmsh4ab8da34c1256bep1354d7jsn393426a2a413',
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      },
    });
    if(res){
      dispatch({
        type: 'GET_HOTEL',
        payload: res.data,
      });
      console.log('res.data V1 :', res.data);
    }
  } catch (e) {
    dispatch({
      type: 'SET_LOADING_HOTEL',
      payload: false,
    });
    console.log('Error fetch data :', e);
  }
};

export const getMetaDataHotelV2 = () => async dispatch => {
    try{
        dispatch({
            type: 'SET_LOADING_HOTEL',
            payload: true,
        });
        const res = await Axios.get(`${API_HOST.urlHotelV2}get-meta-data`, {
            headers: {
                'x-rapidapi-key': '94f169d30fmsh4ab8da34c1256bep1354d7jsn393426a2a413',
                'x-rapidapi-host': 'hotels4.p.rapidapi.com',
            },
        });
        if(res){
            dispatch({
                type: 'GET_HOTEL',
                payload: res.data,
            });
            console.log('res.data V2 :', res.data);
        }
    }
    catch(e){
        console.log('Axios Error :', e);
    }
};