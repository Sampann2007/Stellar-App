import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import StarMap from './Screen.js/StarMap'
import DailyPic from './Screen.js/DailyPic'
import SpaceCraft from './Screen.js/SpaceCrafts'
import HomeScreen from './Screen.js/HomeScreen'

const Stack=createStackNavigator()

export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer> 
      <Stack.Navigator initianRouteName="HomeScreen" screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen"component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="DailyPic"component={DailyPic}></Stack.Screen>
      <Stack.Screen name="SpaceCraft"component={SpaceCraft}></Stack.Screen>
      <Stack.Screen name="StarMap"component={StarMap}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );}
}