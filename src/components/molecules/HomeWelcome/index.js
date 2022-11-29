import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
const HomeWelcome = ({navigation}) => {
  const {isLoggedIn} = useSelector(state => state.auth);
  const state = useSelector((state) => state);  
  return (
    <View style={styles.profileContainer}>
      {isLoggedIn ? (
        <>
          <View>
            <Text style={styles.desc}>Hi, {state.auth.user}</Text>
            <Text style={styles.appName}>Mau kemana hari ini ?</Text>
          </View>
          <Image source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/201/201634.png'
          }} style={styles.profile} />
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.btnLogin}
          >
            <Text style={styles.desc}>Login</Text>
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450.jpg',
            }}
            style={styles.profile}
          />
        </>
      )}
    </View>
  );
};

export default HomeWelcome;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  appName: {fontSize: 20, fontFamily: 'Raleway-Bold', color: '#020202'},
  desc: {fontSize: 16, fontFamily: 'Raleway-Regular', color: '#8D92A3'},
  profile: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  btnLogin: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#44CFCB',
    borderWidth: 1,

  },

});
