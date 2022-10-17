import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  Login,
  Home,
  Search,
  Map,
  Ticket,
  Profile,
  TourDetail,
  Intro,
  Pesan,
  TicketDetail,
} from '../pages';

import {BottomNavigator} from '../components';
import PesanCheckOut from '../pages/Pesan';
import Checkout from '../pages/Checkout';
import Success from '../pages/Success';
import InformationPribadi from '../pages/Information';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Map" component={Map} options={{headerShown: false}} />
      <Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      /> */}
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Home"
        component={Navigations}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TourDetail"
        component={TourDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PesanCheckOut"
        component={PesanCheckOut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TicketDetail"
        component={TicketDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InformationPribadi"
        component={InformationPribadi}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
