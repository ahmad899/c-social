import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from '../../screens/DiscoverScreen/DiscoverScreen';
import screenOption from './StackStyle';

const DiscoverStackScreen = () => {
  const DiscoverStack = createNativeStackNavigator();
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={screenOption}
      />
    </DiscoverStack.Navigator>
  );
};

export default DiscoverStackScreen;
