import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import WelcomeSreen from '../screens/welcome-screen/WelcomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen/CreateAccountScreen';
import CreateAccountByNumber from '../screens/CreateAccountByNumber/CreateAccountByNumber';
import ConfirmNumberScreen from '../screens/CreateAccountByNumber/ConfirmNumberScreen';

import HomeNavigator from './HomeNavigator';
import SignInWithNumber from '../screens/SignInWithNumber/SignInWithNumber';
import ResetPassScreen from '../screens/ResetPassScreen/ResetPassScreen';
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
