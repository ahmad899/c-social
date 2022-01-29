import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {Avatar, Button} from 'react-native-paper';
import style from './style';
const {width, height} = Dimensions.get('screen');
const ProfileScreen = ({navigation, route}) => {
  const [notification, setnotification] = useState(true);
  const [firendList, setfirendList] = useState(false);
  useLayoutEffect(() => {
    const unsubscribe = navigation.setOptions({
      headerTitleAlign: 'center',
      headerRight: () =>
        notification ? (
          <Ionicons
            name="ios-notifications-sharp"
            size={25}
            color={'#3563A8'}
          />
        ) : (
          <Ionicons name="ios-notifications-outline" size={25} />
        ),
    });
    return unsubscribe;
  }, [navigation, route, notification]);

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView style={{width: width * 0.95}}>
        <View
          style={[style.profileImageContainer, {width, height: height * 0.3}]}>
          <Avatar.Image
            size={height * 0.2}
            source={{uri: auth().currentUser.photoURL}}
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'grey',
            }}
          />
          <Text style={style.userName}>{auth().currentUser.displayName}</Text>
          <Button
            mode="contained"
            color="#dee2e6"
            uppercase={false}
            style={{width: '100%'}}>
            <Text style={style.profileSettingBtn}>Profile Setting</Text>
          </Button>
          <Button
            mode="contained"
            color="#dee2e6"
            uppercase={false}
            style={{width: '100%', marginTop: 10}}
            onPress={() => auth().signOut()}>
            <Text style={style.profileSettingBtn}>Sign Out</Text>
          </Button>
        </View>
        <View style={style.friendSection}>
          <Text style={style.friendSectionTitle}>Friends</Text>
          <View style={[style.friendList, {height: height * 0.3}]}>
            {firendList ? (
              <>{/* friends List */}</>
            ) : (
              <View style={style.noFriendsMessageContainer}>
                <Text style={style.noFriendsMessage}>
                  No Friends Yet go to discover to add friends
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
