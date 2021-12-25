import React from 'react';
import Home from '../screens/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function HomeNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
