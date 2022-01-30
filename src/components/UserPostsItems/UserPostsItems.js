import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {Avatar} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
const UserPostsItems = ({data}) => {
  /*  const postDate = data.post.timeStamp.toDate(); */
  /*   const now = firebase.firestore.Timestamp.now().toDate();
   */ const now = new Date();
  const subDate = now - data.post.timeStamp.toDate();

  const getPostTime = postDate => {
    if (now.getFullYear() >= postDate.getFullYear()) {
      if (postDate.getMonth() == now.getMonth()) {
        if (postDate.getDay() == now.getDay()) {
          if (postDate.getHours() == now.getHours()) {
            return `${now.getMinutes() - postDate.getMinutes()} minuts ago`;
          }
          return `${now.getHours() - postDate.getHours()} hours ago`;
        }
        return `${now.getDay() + 1 - (postDate.getDay() + 1)} days ago`;
      }
      return postDate.toLocaleString('en-US', {
        weekday: 'short', // long, short, narrow
        // numeric, 2-digit
        hour: 'numeric', // numeric, 2-digit
        minute: 'numeric', // numeric, 2-digit
      });
    }
  };

  return (
    <TouchableOpacity>
      <View style={style.userInfoContainer}>
        <Avatar.Image
          style={style.profileImageAvatar}
          source={{uri: data.post.userImg}}
        />
        <Text style={style.userName}>{data.post.userName}</Text>
        <Text>{getPostTime(data.post.timeStamp.toDate())}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserPostsItems;
