import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import {View,Text,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from './component/Start';
import Login from './component/Login';
import Membership from './component/Membership';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Membership" component={Membership} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
      </Stack.Navigator>

    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});