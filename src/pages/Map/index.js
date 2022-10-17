import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';

import {
  DummyPinMap,
  TourDummy1,
  TourDummy2,
  TourDummy3,
  PinMap,
} from '../../assets';

import {Gap, SearchBar, TourCardMap} from '../../components';
import tour from './../../assets/data/tour';

const Map = ({navigation}) => {
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

  renderCarouselItem = ({item}) => {
    return (
      <TourCardMap
        onPress={() => navigation.navigate('TourDetail',{
          data:item
        })}
        title={item.name}
        images={item.image}
      />
    );
  };

  onCarouselItemChange = index => {
    let location = tour.data[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });

    tour.markers[index].showCallout();
  };

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    this._carousel.snapToItem(index);
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        ref={map => (this._map = map)}
        style={{flex: 1}}
        region={{
          latitude: -6.983698965662942,
          longitude: 110.41052274561882,
          latitudeDelta: 0.0999,
          longitudeDelta: 0.0999,
        }}>
        {tour.data.map((marker, index) => (
          <Marker
            key={marker.id}
            ref={ref => (tour.markers[index] = ref)}
            onPress={() => this.onMarkerPressed(marker, index)}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.name}
            description="Lorem ipsum dolor sit amet">
            {/* Custom Pin Map */}
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#44CFCB',
                  width: 45,
                  height: 45,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: 'cover',
                    borderRadius: 50,
                  }}
                  source={marker.image}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: -10,
                }}>
                <PinMap />
              </View>
            </View>
          </Marker>
        ))}
      </MapView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          padding: 23,
        }}>
        <SearchBar placeholder="Mau kemana hari ini ?" />

        {/* Categori section */}
        <View style={{marginVertical: 20}}>
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
                    kategoriSeleksi.nama == item.nama ? '#44CFCB' : '#DEDEDE',
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
        {/* end category  */}
      </View>
      <View style={{marginBottom: 20, position: 'absolute', bottom: 0}}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={tour.data}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={150}
          onSnapToItem={index => this.onCarouselItemChange(index)}
        />
      </View>
    </View>
  );
};

export default Map;
