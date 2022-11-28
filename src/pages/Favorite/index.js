import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState, } from 'react';
import {BigCardTour, HeaderPrimary, Button} from '../../components';
import tour from './../../assets/data/tour';
import {useSelector} from 'react-redux';

const Favorite = ({navigation}) => {
  const {isLoggedIn} = useSelector(state => state.auth);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary
        type={'header-setting'}
        Title="Favorit"
        />
      {isLoggedIn ? (
      <ScrollView>
        <View style={{marginHorizontal: 30, marginVertical: 25}}>
          <FlatList
            // data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginRight: 5,
                  backgroundColor:
                    kategoriSeleksi.nama == item.nama ? '#44CFCB' : '#F6F6F6',
                  paddingHorizontal: 30,
                  paddingVertical: 2,
                  borderRadius: 100,
                }}
                onPress={() => setKategoriSeleksi(item)}>
                <Text
                  style={{
                    color:
                      kategoriSeleksi.nama == item.nama ? '#fff' : '#8A899C',
                  }}>
                  {item.nama}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {tour.data.map((dataTour, index) => (
            <BigCardTour key={index} tour={dataTour} />
          ))}
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

export default Favorite;
const styles = StyleSheet.create({
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
});