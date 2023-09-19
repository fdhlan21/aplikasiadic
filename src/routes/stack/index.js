// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../page/Splash';
import HomeScreen from '../../page/Home';
import LoginScreen from '../../page/login';
import ListDukunganPengetahuan from '../../page/DukunganPengetahuan/list/list.index';
import Dukunganpengetahuanasi from '../../page/DukunganPengetahuan/list/asi';
import ListDukunganKeterampilan from '../../page/DukunganKeterampilan/list';
import ContactScreen from '../../page/contact';





const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ListDukunganPengetahuan" component={ListDukunganPengetahuan} options={{headerShown:false}}/>
        <Stack.Screen name="DukunganPengetahuanasi" component={Dukunganpengetahuanasi} options={{headerShown:false}}/>
        <Stack.Screen name="ListDukunganKeterampilan" component={ListDukunganKeterampilan} options={{headerShown:false}}/>
        <Stack.Screen name="ContactScreen" component={ContactScreen} options={{headerShown:false}}/>


      </Stack.Navigator>
  
  );
}

export default MyStack;