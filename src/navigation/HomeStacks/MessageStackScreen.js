import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessageScreen from '../../screens/HomeScreens/MessageScreen/MessageScreen';
import screenOption from './StackStyle';

const MessageStackScreen = () => {
  const MessageStack = createNativeStackNavigator();
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
        name="ChatScreen"
        component={MessageScreen}
        options={screenOption}
      />
    </MessageStack.Navigator>
  );
};

export default MessageStackScreen;
