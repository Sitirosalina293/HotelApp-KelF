import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, } from 'react';
import {BigCardTour, HeaderPrimary} from '../../components';
import tour from './../../assets/data/tour';

const Favorite = () => {

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <HeaderPrimary />
        <View style={{alignItems: 'center',
        justifyContent: 'center',
      }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Raleway-Bold',
              color: '#1D2132',
            }}>
            Tempat Favoritmu
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontFamily: 'Raleway-Regular',
              color: '#7C7C8C',
              lineHeight: 24,
            }}>
            Berbagai wisata di kota Semarang {'\n'} dan kabupaten Semarang
          </Text>
        </View>
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
      </View>
    </ScrollView>
  );
};

export default Favorite;
const styles = StyleSheet.create({});