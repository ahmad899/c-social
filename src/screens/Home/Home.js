import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {signOutFromFirebase} from '../../redux/actions/authActionTypes';

const Home = () => {
  console.log(auth().currentUser);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>I am a homescreen</Text>
      <Image
        source={{uri: auth().currentUser.photoURL}}
        style={{height: 100}}
      />
      <Button
        onPress={() => dispatch(signOutFromFirebase())}
        title="signouyt"></Button>
    </View>
  );
};

export default Home;
