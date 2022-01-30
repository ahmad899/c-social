import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  FlatList,
  RefreshControl,
} from 'react-native';

import {recivePostFromFirestore} from '../../../redux/actions/homeActions/homeActionCreators';
import {useDispatch, useSelector} from 'react-redux';
import style from './style';
import UserPostsItems from '../../../components/UserPostsItems/UserPostsItems';
const DiscoverScreen = () => {
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('screen');
  const usersPosts = useSelector(state => state.homeReducer.postFromDB);

  useLayoutEffect(() => {
    dispatch(recivePostFromFirestore());
  }, []);
  /*   const onRefresh = () => {
    dispatch(recivePostFromFirestore());
  }; */
  const renderItem = ({item}) => {
    return <UserPostsItems data={item.data} />;
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{width: width * 0.95}}>
        <FlatList
          data={usersPosts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          /*        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          } */
        />
        <Text>fsdfd</Text>
      </View>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
