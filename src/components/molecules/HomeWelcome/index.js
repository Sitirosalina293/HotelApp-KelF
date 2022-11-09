import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
const HomeWelcome = () => {
  const {isLoggedIn} = useSelector(state => state.auth);
  return (
    <View style={styles.profileContainer}>
      {isLoggedIn ? (
        <>
          <View>
            <Text style={styles.desc}>Hi, Thamasyer</Text>
            <Text style={styles.appName}>Mau kemana hari ini ?</Text>
          </View>
          <Image source={ProfileDummy} style={styles.profile} />
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
