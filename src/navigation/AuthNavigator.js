import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import WelcomeSreen from '../screens/welcome-screen/WelcomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen/CreateAccountScreen';
import CreateAccountByNumber from '../screens/CreateAccountByNumber/CreateAccountByNumber';
import HomeNavigator from './HomeNavigator';
const Stack = createNativeStackNavigator();
const AuthNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeSreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={CreateAccountScreen} />
      <Stack.Screen name="SignUpWithNumber" component={CreateAccountByNumber} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
