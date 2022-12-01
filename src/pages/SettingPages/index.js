import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import {Button, Gap, HeaderPrimary, Line, TextInput} from '../../components';
import {SafeAreaView} from 'react-native';
import {IcBack2, IcBack3} from '../../assets';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/action/auth';
import { useEffect } from 'react';
import { saveDataUser } from '../../redux/action';

const SettingPages = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth);
  const {dataUser} = useSelector(state => state.profileReducer);
  console.log('data user dari setting pages', dataUser);

  const onHandleLogOut = () => {
    dispatch(logout()).then(response => {
      if (response.status === 'success') {
        navigation.replace('Login');
      }
    });
  };
  const state = useSelector(state => state);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary
        type={'header-setting'}
        Title="Pengaturan"
        onPress={() => navigation.goBack()}
        icon={<IcBack2 />}
      />
      {isLoggedIn ? (
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Text style={styles.textContent}>MY ACCOUNT</Text>
            <Gap height={10} />
            <TextInput type="setting-only" Title="Username" Desc={
              dataUser && dataUser.fullname ? dataUser.fullname : 'Empty'
            } />
            <Line />
            <TextInput
              type="setting-only"
              Title="Email"
              Desc={
                dataUser && dataUser.email ? dataUser.email : 'Empty'
              }
            />
            <Line />
            <TextInput
              type="setting-only"
              Title="Gender"
              Desc={
                dataUser && dataUser.gender ? dataUser.gender : 'Empty'
              }
            />
            <Line />
            <TextInput type="setting-only" Title="FullName" Desc={
                dataUser && dataUser.fullname ? dataUser.fullname : 'Empty'
            }/>
            <Line />
            <TextInput type="setting-icon" Title="Search History" />
            <Line />
            <TextInput type="setting-icon" Title="Report Problem" />
            <Line />
            <Gap height={20} />
          </View>
          <View style={styles.content}>
            <Text style={styles.textContent}>SUPPORT</Text>
            <Gap height={10} />
            <TextInput type="support" Title="Teams & Policy" />
            <Line />
            <Gap height={20} />
            <Button text="Log Out" onPress={onHandleLogOut} />
            <Gap height={20} />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.btn}>
          <Button text="Login" onPress={() => navigation.navigate('Login')} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SettingPages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#44CFCB',
  },
  textHeader: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    letterSpacing: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
  },
  textContent: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Medium',
    color: '#000',
    letterSpacing: 1,
  },
  isiContent: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
  },
  danger: {
    color: '#FF0000',
  },
});
