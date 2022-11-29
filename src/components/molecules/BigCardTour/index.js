import {TouchableOpacity, View, Text, Image} from 'react-native';
import React from 'react';
import {TourDummy, Star, IcLove} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground} from 'react-native';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import { useSelector } from 'react-redux';

const BigCardTour = ({onPress, Image, price, name, rating}) => {
  const navigation = useNavigation();
  const {isLoggedIn} = useSelector(state => state.auth);

  const onHandleFavorite = () => {
    if (isLoggedIn) {
      navigation.navigate('Favorite');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={style.content}>
        <View>
          <ImageBackground
            style={{width: 300, height: 280, borderRadius: 10}}
            source={Image}>
            <TouchableOpacity style={style.IcLove}
              onPress={onHandleFavorite}
            >
              <IcLove />
            </TouchableOpacity>
          </ImageBackground>
          <View style={style.card}>
            <View style={style.name}>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  fontFamily: 'Raleway-Bold',
                  color: '#1D2132',
                }}>
                {name}
              </Text>
            </View>

            <Text style={style.txtCard}>
              <Star /> {rating}
            </Text>
          </View>
          <Text
            style={{
              marginTop: 6,
              fontSize: 14,
              fontFamily: 'Raleway-Regular',
              color: '#1D2132',
            }}>
            ${price}
            <Text style={{fontFamily: 'Raleway-Bold'}}> / org</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BigCardTour;

const style = StyleSheet.create({
  IcLove: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  content: {
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 30,
    width: '80%',
    backgroundColor: 'white',
    elevation: 3,
    padding: 10,
    borderRadius: 10,
  },
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: Dimensions.get('window').width - 100,
  },
  txtCard: {
    fontSize: 14,
    marginTop: 20,
    fontFamily: 'Raleway-Bold',
    color: '#1D2132',
    maxWidth: 100,
  },
  name: {
    maxWidth: 200,
  },
});
