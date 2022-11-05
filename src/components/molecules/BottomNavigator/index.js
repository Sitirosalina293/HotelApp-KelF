import {View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Profile from '../Profile';
import {
  HomeOn,
  HomeOff,
  ProfileOff,
  Close,
  IcFavOn,
  IcFavOff,
  IcSettingOn,
  IcSettingOff,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <HomeOn /> : <HomeOff />;
    case 'Favorite':
      return focus ? <IcFavOn /> : <IcFavOff />;
    case 'Profile':
      return <ProfileOff />;
    case 'Setting':
      return focus ? <IcSettingOn /> : <IcSettingOff />;
    default:
      return <HomeOff />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        borderTopColor: '#D9D9D9',
        borderTopWidth: 0.5,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}

      <Modal
        animationType={'slide'}
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          console.log('modal has been slosed');
        }}>
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.46)', flex: 1}}>
          <View style={styles.modal}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingTop: 30,
                paddingRight: 40,
              }}
              onPress={() => {
                setShowModal(!showModal);
              }}>
              <Close />
            </TouchableOpacity>
            <Profile navigation={navigation} />
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setShowModal(!showModal);
        }}>
        <ProfileOff />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginTop: 110,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
});
