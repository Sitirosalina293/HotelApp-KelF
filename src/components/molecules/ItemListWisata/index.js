import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TourDummy1} from '../../../assets';

const ItemListWisata = ({
  onPress,
  title,
  date,
  person,
  price,
  isUsed = '',
  image,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View>
            <Text style={styles.titleWisata}>{title}</Text>
            <Text style={styles.nominal}>
              {person} org • IDR {price}
            </Text>
          </View>
          <View>
            <Text style={styles.date}>{date}</Text>
            <Text>{isUsed}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListWisata;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 20,
    borderRadius: 8,
    overflow: 'hidden',
    risizeMode: 'cover',
  },

  titleWisata: {
    fontFamily: 'Raleway-Regular',
    color: '#020202',
    fontSize: 16,
  },
  nominal: {
    fontFamily: 'Raleway-Regular',
    color: '#8D92A3',
    fontSize: 14,
    marginTop: 5,
  },
  date: {
    fontFamily: 'Raleway-Regular',
    color: '#8D92A3',
    fontSize: 14,
    marginTop: 5,
  },
});
