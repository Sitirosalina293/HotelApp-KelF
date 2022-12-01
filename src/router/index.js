import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  Login,
  Home,
  // Search,
  TourDetail,
  Intro,
  TicketDetail,
  SettingPages,
  History,
  Favorite,
  EditProfile,
  ListReview,
} from '../pages';

import {BottomNavigator} from '../components';
import PesanCheckOut from '../pages/Pesan';
import Checkout from '../pages/Checkout';
import Success from '../pages/Success';
import InformationPribadi from '../pages/Information';
import DataPemesan from '../pages/DataPemesan';
import Review from '../pages/Review';
import HistoryReview from '../pages/HistoryReview';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Setting"
        component={SettingPages}
        options={{headerShown: false}}
      />
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
      <Tab.Screen
        name="Setting"
        component={SettingPages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="DataPemesan"
        component={DataPemesan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InformationPribadi"
        component={InformationPribadi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryReview"
        component={HistoryReview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListReview"
        component={ListReview}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
