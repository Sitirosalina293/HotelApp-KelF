import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {TourDummyRec, LogoQR} from '../../assets';
import NavigationBack from './../../components/molecules/NavigationBack/index';
import Rating from './../../components/molecules/Rating/index';
import QRCode from 'react-native-qrcode-svg';
import {Gap} from '../../components';

const TicketDetail = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <NavigationBack
        title="Detail Tiket"
        desc="Tukar tiket dan mulai bersenang-senang !"
        onPress={() => navigation.navigate('Ticket')}
      />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: 130,
              height: 130,
              borderRadius: 20,
            }}
            source={route.params.data.image}
          />
        </View>
        <View style={{marginLeft: 180, marginTop: 10, marginRight: 10}}>
          <Text
            style={{
              fontFamily: 'Raleway-Bold',
              color: '#44CFCB',
              fontSize: 13,
            }}>
            {route.params.data.name}
          </Text>
          <Rating rating={4.8} />
        </View>
        <View style={styles.info}>
          <View
            style={{
              paddingRight: 20,
              paddingLeft: 10,
              borderRightWidth: 1,
              alignItems: 'center',
              borderRightColor: '#CCCCCC',
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Regular',
                fontSize: 14,
                color: '#8D92A3',
                textAlign: 'center',
              }}>
              {route.params.data.person}
              {'\n'}
              Orang
            </Text>
          </View>
          <View
            style={{
              paddingRight: 20,
              paddingLeft: 10,
              borderRightWidth: 1,
              alignItems: 'center',
              borderRightColor: '#CCCCCC',
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Regular',
                fontSize: 14,
                color: '#8D92A3',
                textAlign: 'center',
              }}>
              {route.params.data.checkin}
              {'\n'}
              Check in
            </Text>
          </View>
          <View
            style={{
              paddingRight: 20,
              paddingLeft: 10,
              // borderRightWidth: 1,
              alignItems: 'center',
              borderRightColor: '#CCCCCC',
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Regular',
                fontSize: 14,
                color: '#8D92A3',
                textAlign: 'center',
              }}>
              {route.params.data.expirate}
              {'\n'}
              Expirate
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <View>
          <Text
            style={{
              fontFamily: 'Raleway-SemiBold',
              fontSize: 12,
              color: '#000000',
              textAlign: 'center',
              lineHeight: 20,
            }}>
            Booking : {route.params.data.bookingDate}
            {'\n'}
            Payment method : {route.params.data.paymentMethode}
            {'\n'}
            Total price : IDR {route.params.data.total}
          </Text>
        </View>
        <Gap height={40} />
        <View
          style={{
            width: '100%',
            borderTopWidth: 1,
            borderTopColor: '#DDDDDD',
            borderStyle: 'dashed',
            position: 'relative',
          }}>
          <View>
            <View style={styles.circleLeft} />
            <View style={styles.circleRight} />
          </View>
          <Gap height={30} />
          <Text
            style={{
              fontFamily: 'Raleway-SemiBold',
              fontSize: 16,
              marginBottom: 20,
              color: '#000000',
              textAlign: 'center',
            }}>
            {route.params.data.code}
          </Text>
          <View style={{alignItems: 'center'}}>
            {route.params.data.code ? (
              <View style={styles.qrCode}>
                <QRCode
                  value={route.params.data.code}
                  color="black"
                  backgroundColor="white"
                  size={150}
                  logo={LogoQR}
                  logoSize={40}
                  logoBackgroundColor="transparent"
                />
              </View>
            ) : (
              <Text style={{marginTop: 50}}>Tiket telah digunakan</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default TicketDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    marginTop: 100,
    marginBottom: 50,
    marginHorizontal: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },

  imageContainer: {
    position: 'absolute',
    top: -40,
    left: 40,
    zIndex: 9999,
  },

  qrCode: {
    backgroundColor: '#ffffff',
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  circleLeft: {
    backgroundColor: '#ffffff',
    width: 20,
    height: 20,
    borderRadius: 100,
    position: 'absolute',
    left: -10,
    top: -10,
  },

  circleRight: {
    backgroundColor: '#ffffff',
    width: 20,
    height: 20,
    borderRadius: 100,
    position: 'absolute',
    right: -10,
    top: -10,
  },

  info: {
    marginTop: 80,
    flexDirection: 'row',
  },
});
