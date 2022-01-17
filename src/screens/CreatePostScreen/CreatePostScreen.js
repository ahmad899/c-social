import React, {createRef, useRef} from 'react';
import {useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  Animated,
  Dimensions,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import style from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import BottomSheetAnimation from '../../components/BottomSheetAnimation/BottomSheetAnimation';

const CreatePostScreen = ({navigation, route}) => {
  const {width, height} = Dimensions.get('screen');

  useLayoutEffect(() => {
    const unsubscribe = navigation.setOptions({
      headerTitleAlign: 'center',
      title: 'Create Post',
      headerStyle: {borderBottom: 0},
      headerRight: () => (
        <Button mode="contained" color="#3563A8" uppercase>
          post
        </Button>
      ),
    });
    return unsubscribe;
  }, [navigation, route]);

  return (
    <SafeAreaView style={{width, height}}>
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
      <BottomSheetAnimation />
    </SafeAreaView>
  );
};

export default CreatePostScreen;
