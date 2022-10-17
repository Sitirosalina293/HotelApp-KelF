import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListWisata from '../ItemListWisata';
import tour from './../../../assets/data/tour';

const Aktif = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 17}}>
      {tour.tiketActive.map((tiket, index) => (
        <ItemListWisata
          key={index}
          title={tiket.name}
          price={tiket.price}
          person={tiket.person}
          image={tiket.image}
          date={tiket.bookingDate}
          onPress={() =>
            navigation.navigate('TicketDetail', {
              data: tiket,
            })
          }
        />
      ))}
    </View>
  );
};

const TelahDigunakan = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 17}}>
      {tour.tiketUsed.map((tiket, index) => (
        <ItemListWisata
          key={index}
          title={tiket.name}
          price={tiket.price}
          person={tiket.person}
          image={tiket.image}
          date={tiket.bookingDate}
          isUsed='Used'
          onPress={() =>
            navigation.navigate('TicketDetail', {
              data: tiket,
            })
          }
        />
      ))}
    </View>
  );
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#44CFCB'}}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Raleway-Bold',
          color: focused ? '#44CFCB' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const renderScene = SceneMap({
  1: Aktif,
  2: TelahDigunakan,
});

const TicketTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Aktif'},
    {key: '2', title: 'Telah Digunakan'},
  ]);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
};

export default TicketTabSection;

const styles = StyleSheet.create({});
