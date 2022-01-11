import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from '../../screens/DiscoverScreen/DiscoverScreen';
import screenOption from './StackStyle';

const DiscoverStackScreen = () => {
  const FeedStack = createNativeStackNavigator();
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={screenOption}
      />
    </FeedStack.Navigator>
  );
};

export default DiscoverStackScreen;
