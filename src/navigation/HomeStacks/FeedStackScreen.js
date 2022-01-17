import React, {useLayoutEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../../screens/FeedScreen/FeedScreen';
import CreatePostScreen from '../../screens/CreatePostScreen/CreatePostScreen';
import screenOption from './StackStyle';
import {useNavigationState} from '@react-navigation/native';

const FeedStackScreen = ({navigation, route}) => {
  useLayoutEffect(() => {}, [navigation, route]);

  const FeedStack = createNativeStackNavigator();
  return (
    <FeedStack.Navigator screenOptions={screenOption}>
      <FeedStack.Screen name="FeedScreen" component={FeedScreen} />
      <FeedStack.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{animation: 'slide_from_bottom'}}
      />
    </FeedStack.Navigator>
  );
};

export default FeedStackScreen;
