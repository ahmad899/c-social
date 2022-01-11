import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessageScreen from '../../screens/MessageScreen/MessageScreen';
import screenOption from './StackStyle';

const MessageStack = () => {
  const FeedStack = createNativeStackNavigator();
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="ChatScreen"
        component={MessageScreen}
        options={screenOption}
      />
    </FeedStack.Navigator>
  );
};

export default MessageStack;
