import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from './src/views/Home';
import MusicScreen from './src/views/Music';


const Main = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
    <Main.Navigator>

      <Main.Screen name="Home" component={HomeScreen} />
      <Main.Screen name="Music" component={MusicScreen} />

    </Main.Navigator>
  </NavigationContainer>  );
}