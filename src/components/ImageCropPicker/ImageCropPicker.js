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
import * as authActionTypes from '../../redux/actions/authActionTypes';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

const ImageCropPicker = props => {
  console.log(props.state.authReducer.imgUri);
  const requestStoragePermission = async () => {
    // console.log(PermissionsAndroid);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the EXTERNAL_STORAGE');
        pickImage();
      } else {
        console.log('EXTERNAL_STORAGE permission denied');
      }
    } catch (err) {
      Alert.alert('error');
      console.log(err);
    }
  };

  const pickImage = async () => {
    await ImagePicker.openPicker({
      width: 150,
      height: 150,
      cropping: true,
      cropperCircleOverlay: true,
    }).then(img => {
      props.pickImageFromDevice(img.path);
    });
  };

  /*  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //const source = response.assets[0].uri;
        props.imgurl(response.assets[0].uri);
        console.log(response.assets);
      }
    });
  }; */
  return (
    <TouchableHighlight
      style={style.profileImageContainer}
      onPress={requestStoragePermission}
      underlayColor={'#3563A8'}>
      <Image
        style={style.profileImageStyle}
        source={{
          uri: props.state.authReducer.imgUri,
        }}
      />
    </TouchableHighlight>
  );
};

const mapStateToProps = state => ({
  state: state,
});

const dispatchToProps = dispatch => ({
  pickImageFromDevice: img =>
    dispatch(authActionTypes.pickImageFromDevice(img)),
});
export default connect(mapStateToProps, dispatchToProps)(ImageCropPicker);
