import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedStackScreen from './HomeStacks/FeedStackScreen';
import DiscoverStackScreen from './HomeStacks/DiscoverStackScreen';
import MessageStackScreen from './HomeStacks/MessageStackScreen';
import FriendsStackScreen from './HomeStacks/FriendsStackScreen';
import ProfileStackScreen from './HomeStacks/ProfileStackScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
export default function HomeNavigator() {
  const Tab = createBottomTabNavigator();
  const screenOption = screenRef => ({
    headerShown: false,

    tabBarIcon: ({focused, color, size}) => {
      color = focused ? color : 'grey';
      size = focused ? 30 : size;
      let iconName;
      switch (screenRef) {
        case 'Feed':
          iconName = 'ios-home-outline';
          break;
        case 'Discover':
          iconName = 'ios-search-outline';
          break;
        case 'Chat':
          iconName = 'ios-chatbubble-outline';
          break;
        case 'Friends':
          iconName = 'ios-people-outline';
          break;
        case 'Profile':
          iconName = 'ios-person-outline';
          break;
      }
      return <Ionicons name={iconName} size={30} color={color} size={size} />;
    },
  });

  const getTabBarVisibilty = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    return routeName === 'CreatePostScreen' ? 'none' : 'flex';
  };

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedStackScreen}
        options={({route}) => ({
          ...screenOption('Feed'),
          tabBarStyle: {display: getTabBarVisibilty(route)},
        })}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverStackScreen}
        options={({route}) => screenOption('Discover')}
      />
      <Tab.Screen
        name="Chat"
        component={MessageStackScreen}
        options={({route}) => screenOption('Chat')}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsStackScreen}
        options={({route}) => screenOption('Friends')}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={({route}) => screenOption('Profile')}
      />
    </Tab.Navigator>
  );
}
