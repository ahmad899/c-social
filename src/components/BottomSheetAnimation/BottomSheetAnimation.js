import React, {useEffect, useRef, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import style from './style';
import {List} from 'react-native-paper';
import {
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  Keyboard,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('screen');

const BottomSheetAnimation = () => {
  const bottomVal = useRef(new Animated.Value(0)).current;
  const [bottomTriger, setBottomTriger] = useState(false);
  const [imgUrl, setimgUrl] = useState('');

  Keyboard.addListener('keyboardDidShow', e => {
    Animated.spring(bottomVal, {
      toValue: height / 2.3,
      duration: 100,
      useNativeDriver: true,
    }).start();
  });

  Keyboard.addListener('keyboardDidHide', e => {
    Animated.spring(bottomVal, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  });

  const openCloseBottomSheet = () => {
    setBottomTriger(!bottomTriger);
    if (bottomTriger) {
      Animated.spring(bottomVal, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else if (bottomVal) {
      Animated.spring(bottomVal, {
        toValue: height / 2.3,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //  console.log('You can use the EXTERNAL_STORAGE');
        ImagePicker.openPicker({
          cropping: true,
        })
          .then(img => {
            setimgUrl(img.path);
          })
          .catch(e => {});
      } else {
        alert('Enable permission');
      }
    } catch (err) {
      alert(err);
      //console.log(err);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'C-Social App Camera Permission',
          message:
            'C-Social App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        })
          .then(img => {
            setimgUrl(img.path);
          })
          .catch(e => {});
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'C-Social',
          message: 'C-Social wants access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(info => console.log(info));
      } else {
        console.log(' permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Animated.View
      style={[style.animatedContainer, {transform: [{translateY: bottomVal}]}]}>
      <TouchableOpacity
        style={style.bottonContainer}
        onPress={openCloseBottomSheet}>
        <View style={style.bottonLine} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <List.Section>
          <List.Item
            title="Photo"
            style={{borderTopWidth: 1, borderColor: '#DCDCDC'}}
            left={() => (
              <MaterialIcons
                name="add-photo-alternate"
                size={30}
                color={'green'}
                style={{marginRight: 10}}
              />
            )}
            onPress={requestStoragePermission}
          />
          <List.Item
            title="Tag people"
            style={{borderTopWidth: 1, borderColor: '#DCDCDC'}}
            left={() => (
              <MaterialIcons
                name="people"
                size={30}
                color={'#3563A8'}
                style={{marginRight: 10}}
              />
            )}
          />
          <List.Item
            title=" Check in"
            style={{borderTopWidth: 1, borderColor: '#DCDCDC'}}
            left={() => (
              <Octicons
                name="location"
                size={30}
                color={'orangered'}
                style={{marginRight: 10}}
              />
            )}
            onPress={requestLocationPermission}
          />
          <List.Item
            title="Camera"
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#DCDCDC',
            }}
            left={() => (
              <MaterialIcons
                name="camera-alt"
                size={30}
                color={'#3563A8'}
                style={{marginRight: 10}}
              />
            )}
            onPress={requestCameraPermission}
          />
        </List.Section>
      </ScrollView>
    </Animated.View>
  );
};

export default BottomSheetAnimation;
