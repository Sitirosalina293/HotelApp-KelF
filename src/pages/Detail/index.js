import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  DetailDummy,
  TourDummy,
  IcBack,
  IcLocation,
  IcLove,
  Gradasi,
} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Gap} from '../../components';
import Rating from '../../components/molecules/Rating';
import Facility from '../../components/molecules/Facilities';
import TextDesc from '../../components/atoms/TextDesc';
import UlasanDetail from '../../components/molecules/Ulasan';
import {useEffect} from 'react';
import {getDetailHotel} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const images = [DetailDummy, TourDummy, DetailDummy, DetailDummy];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const TourDetail = ({navigation, route}) => {
  const [imgActive, setImageActive] = useState(false);
  console.log('route detail', route.params);

  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImageActive(slide);
      }
    }
  };

  const {hotelDetail} = useSelector(state => state.productReducer);

  const {isLoggedIn} = useSelector(state => state.auth);

  const onHandleCheckOut = () => {
    if (isLoggedIn) {
      navigation.navigate('PesanCheckOut', route.params);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrap}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <IcBack />
            </TouchableOpacity>
            <IcLove />
          </View>
          <ScrollView
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            <ImageBackground
              resizeMode="cover"
              style={styles.wrap}
              source={{
                // uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_se6ZZSfhaINPRKS0hpJvDorSt7x7iYA5LOzOo1lSHV98Phdiy09scX2-njw-5T2dwjLM7bfq703gdQ-v-wiesQ',
                uri: hotelDetail.images[0].imageUrl,
              }}>
              <View style={styles.opacity}>
                <Gradasi />
              </View>
            </ImageBackground>
          </ScrollView>
        </View>
        <View style={styles.wrap2}>
          <View style={styles.content1}>
            <Text style={styles.title}>{hotelDetail.name}</Text>
            <Rating rating={hotelDetail.starRating} />
          </View>
          <View style={styles.content2}>
            <IcLocation />
            <Gap width={10} />
            <Text style={styles.location}>
              {hotelDetail.location.address.cityName}
            </Text>
            <Gap width={10} />
          </View>
          <Facility />
          <TextDesc text={hotelDetail.description} />
          <UlasanDetail />
        </View>
      </ScrollView>
      <View style={styles.contentPrice}>
        <View>
          <Text style={styles.price}>${route.params.priceHotel}</Text>
          <Text>/ Person</Text>
        </View>
        <Button text="Book Now" onPress={onHandleCheckOut} />
      </View>
    </SafeAreaView>
  );
};

export default TourDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.5,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: '#44CFCB',
  },
  dot: {
    margin: 3,
    color: '#CBCBCB',
  },
  cover: {
    height: 416.59,
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WIDTH,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  wrap2: {
    marginHorizontal: 25,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
    color: '#44CFCB',
    letterSpacing: 1,
  },
  content1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content2: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#44CFCB',
    marginVertical: 15,
  },
  location: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: '#CBCBCB',
  },
  opacity: {
    position: 'absolute',
    bottom: 0,
  },

  contentPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  price: {
    fontFamily: 'Raleway-Bold',
    fontSize: 25,
    color: '#1D2132',
    fontStyle: 'normal',
  },
});
