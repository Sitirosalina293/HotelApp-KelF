import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from '../../utils';

export const saveDataUser = data => async dispatch => {
  try {
    await AsyncStorage.getItem('dataUser').then(async dataUserSource => {
      dataUserSource = dataUserSource ?? '[]';
      let dataUser = JSON.parse(dataUserSource);
      if(dataUser.length === 0){
        dataUser.push(data);
        return await AsyncStorage.setItem('dataUser', JSON.stringify(dataUser)).then(() => {
          dispatch({
            type: 'GET_DATA_USER',
            payload: dataUser,
          });
        });
      }else{
        dataUser[0] = data;
        console.log('dataUser else : ', data);
        return await AsyncStorage.setItem
        ('dataUser', JSON.stringify(data)).then(() => { 
          dispatch({
            type: 'GET_DATA_USER',
            payload: data,
          });
        });
      }
      showMessage('Data User Berhasil Disimpan', 'success');
    });
  } catch (e) {
    console.log('Error save data pesan', e);
  }
};

//     AsyncStorage.setItem('dataUser', JSON.stringify(data));
//     dispatch({
//       type: 'GET_DATA_USER',
//       payload: data,
//     });
//     console.log('data user profile berhasil disimpan', data);
//     // }
//   } catch (e) {
//     console.log('Error save data :', e);
//   }
// };

export const saveDataPemesanan = data => async dispatch => {
  try {
    const {phone} = data;
    if (phone === '') {
      console.log('data kosong');
    } else {
      AsyncStorage.setItem('dataPemesanan', JSON.stringify(data));
      dispatch({
        type: 'GET_DATA_PEMESANAN',
        payload: data,
      });
      console.log('data pemesanan berhasil disimpan', data);
    }
  } catch (e) {
    console.log('Error save data :', e);
  }
};


