import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/AuthinticationScreens/SignInScreen/SignInScreen';
import WelcomeSreen from '../screens/welcome-screen/WelcomeScreen';
import CreateAccountScreen from '../screens/AuthinticationScreens/CreateAccountScreen/CreateAccountScreen';
import CreateAccountByNumber from '../screens/AuthinticationScreens/CreateAccountByNumber/CreateAccountByNumber';
import ConfirmNumberScreen from '../screens/AuthinticationScreens/CreateAccountByNumber/ConfirmNumberScreen';
import ResetPassScreen from '../screens/AuthinticationScreens/ResetPassScreen/ResetPassScreen';
import SignInWithNumber from '../screens/AuthinticationScreens/SignInWithNumber/SignInWithNumber';

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
      <Stack.Screen
        name="ConfirmNumberScreen"
        component={ConfirmNumberScreen}
      />
      <Stack.Screen name="SignInWithNumber" component={SignInWithNumber} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="ResetPassScreen" component={ResetPassScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
