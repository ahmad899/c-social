import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedStackScreen from './HomeStacks/FeedStackScreen';
import DiscoverStackScreen from './HomeStacks/DiscoverStackScreen';
import MessageStack from './HomeStacks/MessageStack';
import FriendsStack from './HomeStacks/FriendsStack';
import ProfileStack from './HomeStacks/ProfileStack';
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

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedStackScreen}
        options={screenOption('Feed')}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverStackScreen}
        options={screenOption('Discover')}
      />
      <Tab.Screen
        name="Chat"
        component={MessageStack}
        options={screenOption('Chat')}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsStack}
        options={screenOption('Friends')}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={screenOption('Profile')}
      />
    </Tab.Navigator>
  );
}
