import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Gap, HeaderPrimary, TextInput} from '../../components';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveDataUser} from '../../redux/action';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {dataUser} = useSelector(state => state.profileReducer);
  console.log('data user dari edit profile', dataUser);

  const [email, setEmail] = useState();
  const [gender, setGender] = useState();

  const onHandleSubmit = () => {
    let data = {
      email: email,
      gender: gender,
    };
    if (data.email === '' && data.gender === '') {
      console.log('email dan gender kosong');
    } else {
      console.log('email dan gender terisi');
      dispatch(saveDataUser(data));
      navigation.replace('MainApp');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary Title="Edit Profile" type={'header-setting'} />
      <View style={styles.content}>
        <Text style={styles.txtTitle}>Edit Profile</Text>
        <TextInput
          label="Username"
          placeholder="Type your name"
          value={state.auth.user}
          editable={false}
        />
        <Gap height={10} />
        <TextInput
          label="Email"
          placeholder="Type your email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={10} />
        <TextInput
          label="Gender"
          placeholder="Type your gender"
          value={gender}
          onChangeText={value => setGender(value)}
        />
      </View>
      <View style={styles.content2}>
        <Button
          text="Save Profile"
          type="btn-primary"
          onPress={onHandleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 20,
  },
  txtTitle: {
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
    color: '#020202',
    marginBottom: 10,
  },
  //
  content2: {
    padding: 20,
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
});
