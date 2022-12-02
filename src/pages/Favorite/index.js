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
import React, {useState} from 'react';
import {BigCardTour, HeaderPrimary, Button} from '../../components';
import {useDispatch, useSelector} from 'react-redux';

const Favorite = ({navigation}) => {
  const {isLoggedIn} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const {savedNews} = useSelector(state => state.productReducer);

  const handleAddToSaved = item => {
    dispatch(addToSaved(item));
  };
  const handleRemoveFromSaved = item => {
    dispatch(removeFromSaved(item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary type={'header-setting'} Title="Favorit" />
      {isLoggedIn ? (
        <ScrollView>
          {savedNews.length === 0 ? (
            <View style={styles.btn}>
              <Text>No Items</Text>
            </View>
          ) : (
            <View
              style={{
                marginBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {savedNews.map((hotel, index) => {
                return (
                  <BigCardTour
                    key={index}
                    Image={{
                      uri: hotel.media.url,
                    }}
                    name={hotel.name}
                    rating={hotel.starRating}
                    price={hotel.ratesSummary.minPrice}
                    onHandleFavorite={() => {
                      savedNews.find(hotel => hotel.name === hotel.name)
                        ? handleRemoveFromSaved(hotel)
                        : handleAddToSaved(hotel)
                    }}
                  />
                );
              })}
            </View>
          )}
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
