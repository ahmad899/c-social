import React, {useLayoutEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../../screens/HomeScreens/FeedScreen/FeedScreen';
import CreatePostScreen from '../../screens/HomeScreens/CreatePostScreens/CreatePostScreen/CreatePostScreen';
import screenOption from './StackStyle';
import AddLocationScreen from '../../screens/HomeScreens/CreatePostScreens/AddLocationScreen/AddLocationScreen';

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
      <FeedStack.Screen
        name="AddLocationScreen"
        component={AddLocationScreen}
        options={{title: 'Add Location', animation: 'slide_from_right'}}
      />
    </FeedStack.Navigator>
  );
};

export default FeedStackScreen;
