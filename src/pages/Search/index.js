import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  BigCardTour,
  SearchIcon,
  HeaderPrimary,
  CardSearch,
  Gap,
} from '../../components';
import tour from './../../assets/data/tour';
import {SafeAreaView} from 'react-native';

const Search = () => {
  const [kategori, setKategori] = useState([
    {
      nama: 'Wow',
    },
    {
      nama: 'Wahana',
    },
    {
      nama: 'Pantai',
    },
    {
      nama: 'Gunung',
    },
    {
      nama: 'Pedesaan',
    },
  ]);

  const [kategoriSeleksi, setKategoriSeleksi] = useState({
    nama: 'Wow',
  });

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <HeaderPrimary type="header-secondary" />
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Raleway-Bold',
            color: '#1D2132',
          }}>
          Pilih Wisatamu
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
      <Gap height={10} />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <CardSearch />

        {/* Categori section */}
        <View style={{marginHorizontal: 30, marginVertical: 25}}>
          <FlatList
            data={kategori}
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
        {tour.data.map((dataTour, index) => (
          <BigCardTour key={index} tour={dataTour} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
