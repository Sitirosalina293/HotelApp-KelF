import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput, Gap, Button} from '../../components';
import {MinLogo, Google} from '../../assets';

const Login = ({navigation}) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log('username: ', username);
    console.log('password: ', password);
    navigation.navigate('MainApp');
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.header}>
        <MinLogo />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleHeader}>
            Masuk dan mulai{'\n'}berThamasya
          </Text>
          <Text
            style={styles.daftar}>
            Daftar ?
          </Text>
        </View>
        <Gap height={60} />
        <TextInput
          label="Email Address"
          placeholder=""
          value={username}
          onChangeText={value => setUsername(value)}
        />
        <Gap height={30} />
        <TextInput
          label="Password"
          placeholder=""
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Text
          style={{
            fontFamily: 'Raleway-Regular',
            fontSize: 12,
            marginTop: 9,
            color: '#7D8797',
            textDecorationLine: 'underline',
          }}>
          Forgot My Password
        </Text>
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit} />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Raleway-Regular',
            marginVertical: 20,
            fontSize: 15,
          }}>
          atau masuk dengan
        </Text>
        <Button text="Google" icon={<Google />} color="#7D8797" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 30,
    marginTop: 50,
  },
  titleHeader: {
    fontFamily: 'Raleway-Bold',
    color: '#44CFCB',
    fontSize: 20,
    marginTop: 20,
  },

  daftar: {
    fontFamily: 'Raleway-Regular',
    color: '#7D8797',
    fontSize: 16,
    marginTop: 55,
    textDecorationLine: 'underline',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
