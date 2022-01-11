import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FriendsScreen from '../../screens/FriendsScreen/FriendsScreen';
import screenOption from './StackStyle';
const FriendsStack = () => {
  const FeedStack = createNativeStackNavigator();
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={screenOption}
      />
    </FeedStack.Navigator>
  );
};

export default FriendsStack;
