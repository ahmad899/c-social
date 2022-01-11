import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import style from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
const CreatePostScreen = ({route}) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    const unsubscribe = navigation.setOptions({
      headerTitleAlign: 'center',
      title: 'Create Post',
      headerStyle: {borderBottom: 0},
    });
    return unsubscribe;
  }, [navigation, route]);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <View style={style.container}>
          <View style={style.imageContainer}>
            <Image
              source={{uri: auth().currentUser.photoURL}}
              style={style.imageStyle}
            />
            <Text style={style.userNameText}>
              {auth().currentUser.displayName}
            </Text>
          </View>
          <View style={style.createPostContainer}>
            <TextInput
              placeholder={`What's in your Mind`}
              style={style.postText}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePostScreen;
