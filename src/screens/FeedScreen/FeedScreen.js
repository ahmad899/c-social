import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StatusBar,
  Pressable,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {signOutFromFirebase} from '../../redux/actions/authActionTypes';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

const FeedScreen = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable>
          <EvilIcons name="camera" size={30} color="black" />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable>
          <MaterialCommunityIcons
            name="playlist-edit"
            size={30}
            color="black"
          />
        </Pressable>
      ),
    });
  }, [navigation, route]);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;
