import React, {useLayoutEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../../screens/FeedScreen/FeedScreen';
import CreatePostScreen from '../../screens/CreatePostScreen/CreatePostScreen';
import screenOption from './StackStyle';
import {useNavigationState} from '@react-navigation/native';

const FeedStackScreen = ({navigation, route}) => {
  console.log(route);
  useLayoutEffect(() => {
    /*     if (state && state > 0) {
      navigation.setOptions({tabBarVisiable: false});
    } else {
      navigation.setOptions({tabBarVisiable: true});
    } */
  }, [navigation, route]);

  const FeedStack = createNativeStackNavigator();
  return (
    <FeedStack.Navigator screenOptions={screenOption}>
      <FeedStack.Screen name="FeedScreen" component={FeedScreen} />
      <FeedStack.Screen name="CreatePostScreen" component={CreatePostScreen} />
    </FeedStack.Navigator>
  );
};

export default FeedStackScreen;
