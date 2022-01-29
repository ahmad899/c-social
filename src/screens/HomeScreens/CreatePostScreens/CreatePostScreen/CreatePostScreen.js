import React, {useState, useEffect} from 'react';
import {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import style from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import BottomSheetAnimation from '../../../../components/BottomSheetAnimation/BottomSheetAnimation';
import {useDispatch, useSelector} from 'react-redux';
import {Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  clearPost,
  postToFireBase,
} from '../../../../redux/actions/homeActions/homeActionCreators';
import CreatePostMapeView from '../../../../components/CreatePostMapeView/CreatePostMapeView';
import CreatePostImage from '../../../../components/CreatePostImage/CreatePostImage';
const CreatePostScreen = ({navigation, route}) => {
  const {width, height} = Dimensions.get('screen');
  const dispatch = useDispatch();
  const post = useSelector(state => state.homeReducer.post);

  const [text, setText] = useState(post.text ? post.text : '');

  useLayoutEffect(() => {
    const unsubscribe = navigation.setOptions({
      headerTitleAlign: 'center',
      title: 'Create Post',
      headerStyle: {borderBottom: 0},
      headerRight: () => (
        <Button
          mode="contained"
          color="#3563A8"
          uppercase
          //disable button based on post type if declared or not
          disabled={
            text.length != 0 || post.type != null || post.imageUri != null
              ? false
              : true
          }
          onPress={() => {
            dispatch(postToFireBase(post));
            setText('');
          }}>
          post
        </Button>
      ),
      headerLeft: () => (
        <Ionicons
          name="arrow-back"
          size={30}
          color={'black'}
          onPress={() => {
            dispatch(clearPost());
            navigation.goBack();
          }}
        />
      ),
    });
    return unsubscribe;
  }, [navigation, route, post, text, post.type]);

  useEffect(() => {
    Object.assign(post, {text: text});
  }, [text]);

  return (
    <SafeAreaView style={{width, height, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <View style={style.container}>
          <View style={style.imageContainer}>
            <Avatar.Image
              size={70}
              source={{uri: auth().currentUser.photoURL}}
              style={style.imageStyle}
            />
            <Text style={style.userNameText}>
              {auth().currentUser.displayName}
            </Text>
            {/* rendring city name based if there is a post or not and rendering it when user select image */}
            {(post.type === 'locationPost' || post.type === 'imagePost') &&
            post.cityName ? (
              <>
                <Text style={[style.userNameText, {flex: 1, flexWrap: 'wrap'}]}>
                  <Text style={{fontWeight: '400'}}>- in </Text>
                  {post?.cityName}.
                </Text>
              </>
            ) : (
              <></>
            )}
          </View>
          <View style={style.createPostContainer}>
            <TextInput
              placeholder={`What's in your Mind`}
              placeholderTextColor={'black'}
              style={style.postText}
              onChangeText={txt => setText(txt)}
              value={text}
            />

            {/* rendering map to show where is the user but if he select image it will be replaced by the image */}
            {post.type === 'locationPost' && !post.imageUri ? (
              <CreatePostMapeView post={post} />
            ) : /* rendring image */
            post.type === 'imagePost' && post.imageUri ? (
              <CreatePostImage post={post} />
            ) : (
              <></>
            )}
          </View>
        </View>
      </ScrollView>
      <BottomSheetAnimation />
    </SafeAreaView>
  );
};

export default CreatePostScreen;
