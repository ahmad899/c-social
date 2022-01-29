import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FriendsScreen from '../../screens/HomeScreens/FriendsScreen/FriendsScreen';
import screenOption from './StackStyle';
const FriendsStackScreen = () => {
  const FriendsStack = createNativeStackNavigator();
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={screenOption}
      />
    </FriendsStack.Navigator>
  );
};

export default FriendsStackScreen;
