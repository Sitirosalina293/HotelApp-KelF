import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import ButtonCard from '../../atoms/ButtonCard';

const ItemHistory = ({image, name, location, rating, price}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.contentText}>
        <Text style={styles.textTitle}>{name}</Text>
        <Text style={styles.textLocation}>{location}</Text>
        <View style={styles.btnBeli}>
          <ButtonCard text={price} />
        </View>
      </View>
      <Rating rating={rating} />
    </TouchableOpacity>
  );
};

export default ItemHistory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#EAEAF0',
    marginBottom: 10,
    marginStart: 16,
    marginEnd: 16,
  },
  image: {
    overflow: 'hidden',
    marginRight: 16,
    resizeImage: 'cover',
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  contentText: {
    flex: 1,
  },
  textTitle: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 16,
    color: '#1D2132',
    marginBottom: 5,
  },
  textLocation: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#8A899C',
    marginBottom: 10,
  },
  btnBeli: {
    width: 65,
    height: 40,
  },
});
