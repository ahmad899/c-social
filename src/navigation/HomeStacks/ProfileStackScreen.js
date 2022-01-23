import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/HomeScreens/ProfileScreen/ProfileScreen';
import screenOption from './StackStyle';

const ProfileStackScreen = () => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={screenOption}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
