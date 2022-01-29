import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import style from './style';
import {clearPostImage} from '../../redux/actions/homeActions/homeActionCreators';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
const {width, height} = Dimensions.get('screen');

const CreatePostImage = ({post}) => {
  const dispatch = useDispatch();
  return (
    <View style={[style.postImageContainer, {height: height * 0.4, width}]}>
      <Materiallcons
        name="cancel"
        size={30}
        style={style.cancelStyle}
        onPress={() => {
          dispatch(clearPostImage);
        }}
        color={'grey'}
      />
      <Image
        source={{uri: post.imageUri}}
        style={[
          {
            height: '100%',
            resizeMode: 'contain',
          },
        ]}
      />
    </View>
  );
};

export default CreatePostImage;
