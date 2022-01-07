import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../../screens/FeedScreen/FeedScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FeedStackScreen = () => {
  const screenOption = screenRef => ({
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: 'San Francisco',
      fontSize: 18,
      fontWeight: '700',
    },
    headerStyle: {height: 40},
  });

  const FeedStack = createNativeStackNavigator();
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Feed"
        component={FeedScreen}
        options={screenOption}
      />
    </FeedStack.Navigator>
  );
};

export default FeedStackScreen;
