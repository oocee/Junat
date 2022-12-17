import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../Screens/MainScreen'
import TrainsScreen from '../Screens/TrainsScreen'
import { StatusBar } from 'expo-status-bar';


const Stack = createStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name ="MainScreen" component={MainScreen} />
            <Stack.Screen name="TrainsScreen" component={TrainsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;