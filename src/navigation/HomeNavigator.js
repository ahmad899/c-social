import React from 'react';
import FeedScreen from '../screens/FeedScreen/FeedScreen';
import DiscoverScreen from '../screens/DiscoverScreen/DiscoverScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageScreen from '../screens/MessageScreen/MessageScreen';
import FriendsScreen from '../screens/FriendsScreen/FriendsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
export default function HomeNavigator() {
  const Tab = createBottomTabNavigator();

  const screenOption = screenRef => ({
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: 'San Francisco',
      fontSize: 18,
      fontWeight: '700',
    },
    headerStyle: {height: 30},

    tabBarIcon: ({focused, color}) => {
      color = focused ? color : 'grey';
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
      return <Ionicons name={iconName} size={30} color={color} />;
    },
    tabBarLabel: '',
  });

  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
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
