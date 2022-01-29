import React, {useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import {recivePostFromFirestore} from '../../../redux/actions/homeActions/homeActionCreators';
import {useDispatch, useSelector} from 'react-redux';

const DiscoverScreen = () => {
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('screen');
  const usersPosts = useSelector(state => state.homeReducer.postFromDB);
  console.log(usersPosts);
  /*   console.log(typeof usersPosts);
  console.log(usersPosts); */
  /*  console.log(arr); */
  useLayoutEffect(() => {
    dispatch(recivePostFromFirestore());
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView style={{width: width * 0.95}}>
        {usersPosts.map(user => (
          <Text>{user.post.text}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
