import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Gap, HeaderPrimary, TextInput} from '../../components';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveDataUser} from '../../redux/action';
import DropDownPicker from 'react-native-dropdown-picker';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {dataUser} = useSelector(state => state.profileReducer);
  console.log('data user dari edit profile', dataUser);

  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [fullname, setFullname] = useState();

  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);

  const onHandleSubmit = () => {
    let data = {
      email: email,
      gender: gender,
      fullname: fullname,
    };
    console.log('data yang dikirim', data);
    if(!data.email && !data.gender && !data.fullname) {
      console.log('data kosong');
    } else {
      console.log('data tidak kosong');
      dispatch(saveDataUser(data));
      navigation.goBack();
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
        <Gap height={10} />
        <TextInput
          label="Full Name"
          placeholder="Type your full name"
          value={fullname}
          onChangeText={value => setFullname(value)}
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
  content2: {
    padding: 20,
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  Title: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
    color: '#020202',
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    width: '100%',
    height: 50,
    marginTop: 10,
    paddingLeft: 16,
    borderColor: '#F9F9F9',
    borderWidth: 1,
  },
  dropdownStyle: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    width: '100%',
    height: 50,
    marginTop: 10,
    paddingLeft: 16,
    borderColor: '#F9F9F9',
    borderWidth: 1,
  },
  dropdownText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#4F4F4F',
  },
  dropdownContainer: {
    width: '100%',
    marginTop: 10,
    paddingLeft: 16,
    borderColor: '#BDBDBD',
    borderWidth: 0.5,
  },
});
