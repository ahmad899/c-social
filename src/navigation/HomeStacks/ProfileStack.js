import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import screenOption from './StackStyle';

const ProfileStack = () => {
  const FeedStack = createNativeStackNavigator();
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={screenOption}
      />
    </FeedStack.Navigator>
  );
};

export default ProfileStack;
