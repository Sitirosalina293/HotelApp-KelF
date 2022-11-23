import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import {Button, Gap, Line, TextInput} from '../../components';
import {SafeAreaView} from 'react-native';
import {IcBack2, IcBack3} from '../../assets';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/action/auth';

const SettingPages = ({navigation}) => {
  const dispatch = useDispatch();
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack2 />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Setting</Text>
        <View></View>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.textContent}>MY ACCOUNT</Text>
          <Gap height={10} />
          <TextInput type="setting-only" Title="Username" Desc={'Rizky'} />
          <Line />
          <TextInput type="setting-only" Title="Email" Desc={'-'} />
          <Line />
          <TextInput type="setting-only" Title="Gender" Desc={'-'} />
          <Line />
          <TextInput type="setting-icon" Title="Language" />
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
  // textIsiContent: {
  //   fontSize: 14,
  //   fontFamily: 'Poppins-Regular',
  //   color: '#000',
  //   letterSpacing: 1,
  // },
  // textIsiContent2: {
  //   fontSize: 14,
  //   fontFamily: 'Poppins-Regular',
  //   color: '#9A9A9A',
  //   letterSpacing: 1,
  // },
  danger: {
    color: '#FF0000',
  },
});
