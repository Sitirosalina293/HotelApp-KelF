import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataUser = data => async dispatch => {
  console.log('data user profile : ', data);
  try {
    const {email, gender, fullname} = data;
    if (email === '' && gender === '' && fullname === '') {
      console.log('email dan gender kosong');
    } else {
      AsyncStorage.setItem('dataUser', JSON.stringify(data));
      dispatch({
        type: 'GET_DATA_USER',
        payload: data,
      });
      console.log('data user profile berhasil disimpan');
    }
  } catch (e) {
    console.log('Error save data :', e);
  }
};
