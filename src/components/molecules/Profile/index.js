import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ProfileDummy,
  ProfileDark,
  TicketDark,
  About,
  Calling,
  Shield,
  IcSettingOff,
  IcSettingDark,
} from '../../../assets';
import ListMenu from './../ListMenu/index';
import {Button, Gap} from '../../atoms';
import {useSelector} from 'react-redux';

const dataMenu = [
  {
    id: 1,
    name: 'Bookings',
    total: 25,
  },
  {
    id: 2,
    name: 'Reviews',
    total: 0,
  },
  {
    id: 3,
    name: 'Favorite',
    total: 5,
  },
];

const Profile = ({navigation}) => {
  const {isLoggedIn} = useSelector(state => state.auth);
  return (
    <View>
      {isLoggedIn ? (
        <>
          <View style={styles.profileContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image source={ProfileDummy} style={styles.profile} />
              <View style={{marginLeft: 10}}>
                <Text style={styles.appName}>Rizki Darmawan</Text>
                <Text style={styles.desc}>Semarang, Indonesia</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditProfile')}>
                  <Text style={styles.tampil}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View></View>
          </View>
          <View style={styles.menuProfile}>
            {dataMenu.map(item => {
              return (
                <TouchableOpacity key={item.id} style={styles.menu}>
                  <Text style={[styles.menuText, styles.title]}>
                    {item.name}
                  </Text>
                  <Gap height={5} />
                  <Text style={[styles.menuText, styles.desc]}>
                    {item.total}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <ListMenu
            text="Settings"
            icon={<IcSettingDark />}
            onPress={() => navigation.navigate('Setting')}
          />
          <ListMenu
            text="History Booking"
            icon={<TicketDark />}
            onPress={() => navigation.navigate('History')}
          />
        </>
      ) : (
        <>
          <View style={styles.btn}>
            <Button
              text="Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </>
      )}
      <ListMenu text="Kontak dan Bantuan" icon={<Calling />} />
      <ListMenu text="Tentang Aplikasi" icon={<About />} />
      <ListMenu text="Kebijakan Privasi" icon={<Shield />} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
  },
  appName: {fontSize: 18, fontFamily: 'Raleway-Bold', color: '#020202'},
  desc: {fontSize: 12, fontFamily: 'Raleway-Regular', color: '#8D92A3'},
  profile: {
    width: 50,
  },
  tampil: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    color: '#020202',
    textDecorationLine: 'underline',
  },

  logout: {
    marginHorizontal: 25,
    marginTop: 40,
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    color: '#020202',
    textDecorationLine: 'underline',
  },
  menuProfile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginStart: 25,
    marginEnd: 25,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  menu: {
    alignItems: 'center',
    padding: 15,
  },
  menuText: {
    fontSize: 14,
    color: '#020202',
    letterSpacing: 0.5,
    fontFamily: 'Popins-Regular',
  },
  title: {
    fontWeight: 'bold',
    color: '#8D92A3',
  },
  desc: {
    fontSize: 14,
    color: '#44CFCB',
  },
  btn: {
    marginHorizontal: 25,
    marginTop: 40,
  },
  
});
