import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import style from './style';
import ImagePicker from 'react-native-image-crop-picker';

const RigsterImageCropPicker = ({imageUri, imageUriFromChild}) => {
  const requestStoragePermission = async () => {
    // console.log(PermissionsAndroid);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //  console.log('You can use the EXTERNAL_STORAGE');
        pickImage();
      } else {
        //console.log('EXTERNAL_STORAGE permission denied');
      }
    } catch (err) {
      Alert.alert('error');
      //console.log(err);
    }
  };

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 150,
      height: 150,
      cropping: true,
      cropperCircleOverlay: true,
    }).then(img => {
      imageUriFromChild(img.path);
    });
  };

  return (
    <TouchableHighlight
      style={style.profileImageContainer}
      onPress={requestStoragePermission}
      underlayColor={'#3563A8'}>
      <Image
        style={style.profileImageStyle}
        source={{
          uri: imageUri,
        }}
      />
    </TouchableHighlight>
  );
};

export default RigsterImageCropPicker;
