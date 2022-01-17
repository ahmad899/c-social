import React, {useLayoutEffect, useState} from 'react';
import {View, Text, ScrollView, StatusBar, Pressable} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const FeedScreen = ({route}) => {
  const [feed, setfeed] = useState(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable>
          <EvilIcons name="camera" size={35} color="black" />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable onPress={() => navigation.push('CreatePostScreen')}>
          <MaterialCommunityIcons
            name="playlist-edit"
            size={35}
            color="black"
          />
        </Pressable>
      ),
      title: 'Feed',
    });
  }, [navigation, route]);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {feed ? (
        <ScrollView></ScrollView>
      ) : (
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>no posts go to discover!!!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FeedScreen;
