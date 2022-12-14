import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput, Gap, Button} from '../../components';
import {Logo, Google} from '../../assets';
import { login } from '../../redux/action/auth';
import { showMessage, useForm } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onLogin = () => {
    let user = {
      username: username,
      password: password,
    };
    console.log('user pages login:', user);
    dispatch(login(user))
      .then(response => {
        if (response.status == 'success') {
          AsyncStorage.getItem('dataUser').then(userDataSource => {
            console.log('data user:', userDataSource);
            let userData = JSON.parse(userDataSource);
            dispatch({type: 'GET_DATA_USER', payload: userData});
          });
          navigation.replace('MainApp');
          showMessage('Login Success', 'success');
        }
      })
      .catch(error => {
        console.log('Error: ', error);
        showMessage('Login Failed', 'danger');
      });
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.header}>
        <Logo style={styles.logo}/>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.titleHeader}>
            Login
          </Text>
        </View>
        <Gap height={60} />
        <TextInput
          label="Username"
          placeholder = "Masukkan Username"
          value={username}
          onChangeText={value => setUsername(value)}
        />
        <Gap height={10} />
        <TextInput
          label="Password"
          placeholder="Masukkan Password"
          secureTextEntry = {true}
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={() => onLogin()} />
        <Text style={styles.daftar}>Daftar ?</Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  titleHeader: {
    fontFamily: 'Raleway-Bold',
    color: '#44CFCB',
    fontSize: 20,
  },
  logo:{
    marginHorizontal : 60,
  },
  daftar: {
    fontFamily: 'Raleway-Regular',
    color: '#7D8797',
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
