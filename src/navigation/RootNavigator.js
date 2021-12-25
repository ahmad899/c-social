import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator.js';
import HomeNavigator from './HomeNavigator';
import {useDispatch, useSelector} from 'react-redux';
import * as actionTypes from '../redux/actions/authActionTypes';
import LoadingScreen from '../screens/LoadingScreen/LoadingScreen.js';
import {useEffect} from 'react';
import {useState} from 'react';
const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const userSigned = useSelector(state => state.authReducer.userSigned);
  const dispatch = useDispatch();

  dispatch(actionTypes.firebaseAuthStateChange());

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userSigned ? (
          <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
        ) : (
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
