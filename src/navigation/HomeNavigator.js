import React from 'react';
import DiscoverScreen from '../screens/DiscoverScreen/DiscoverScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageScreen from '../screens/MessageScreen/MessageScreen';
import FriendsScreen from '../screens/FriendsScreen/FriendsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import FeedStackScreen from './HomeStacks/FeedStackScreen';
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
    <Tab.Navigator initialRouteName="FeedStack">
      <Tab.Screen
        name="FeedStack"
        component={FeedStackScreen}
        options={screenOption('Feed')}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={screenOption('Discover')}
      />
      <Tab.Screen
        name="Chat"
        component={MessageScreen}
        options={screenOption('Chat')}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={screenOption('Friends')}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={screenOption('Profile')}
      />
    </Tab.Navigator>
  );
}
