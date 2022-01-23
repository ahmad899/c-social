import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import * as authActionTypes from '../../../redux/actions/authActionTypes';
import style from './style.js';
import RigsterImageCropPicker from '../../../components/RigsterImageCropPicker/RigsterImageCropPicker';
import LoadingScreen from '../../LoadingScreen/LoadingScreen.js';
const CreateAccountScreen = props => {
  const navigation = useNavigation();
  const [firstName, setfirstName] = useState('');
  const [secondName, setsecondName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [imageUri, setimageUri] = useState(props.state.authReducer.imgUri);
  const errorMsg = props.state.errorMsg;

  const handleSubmit = () => {
    const user = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      password: password,
      imageUri: imageUri,
    };
    props.signUpUserFirebase(user);
  };

  const imageUriFromChild = imageUri => {
    setimageUri(imageUri);
  };
  if (props.state.authReducer.isSigningUp) return <LoadingScreen />;
  else
    return (
      <SafeAreaView style={style.container}>
        <StatusBar />
        <ScrollView
          contentContainerStyle={style.scrollContainer}
          scrollEnabled={true}>
          <Text style={style.headerText}>Create new account</Text>
          <View style={style.innerContainer}>
            <View style={style.upperContainer}>
              <RigsterImageCropPicker
                imageUri={imageUri}
                imageUriFromChild={imageUriFromChild}
              />
            </View>
            <View style={style.textInputContainer}>
              <TextInput
                placeholder={'First Name'}
                placeholderTextColor={'grey'}
                style={style.textInputStyle}
                onChangeText={txt => setfirstName(txt)}
              />
              <TextInput
                placeholder={'Last Name'}
                placeholderTextColor={'grey'}
                style={style.textInputStyle}
                onChangeText={txt => setsecondName(txt)}
              />
              <TextInput
                placeholder={'E-mail Address'}
                placeholderTextColor={'grey'}
                style={style.textInputStyle}
                onChangeText={txt => setemail(txt)}
              />
              <TextInput
                placeholder={'Password'}
                placeholderTextColor={'grey'}
                style={style.textInputStyle}
                onChangeText={txt => setpassword(txt)}
                secureTextEntry={true}
              />
            </View>
            <View style={style.buttonsContainer}>
              <TouchableOpacity
                style={style.signUpBtn}
                onPress={() => handleSubmit()}>
                <Text style={style.signUpText}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={style.orText}>OR</Text>
              <Pressable
                onPress={() => navigation.navigate('SignUpWithNumber')}>
                <Text style={style.signUpWithNumberText}>
                  Sign Up with phone number
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

const mapStateToProps = state => ({
  state: state,
});

const dispatchToProps = dispatch => ({
  signUpUserFirebase: user =>
    dispatch(authActionTypes.signUpUserFirebase(user)),
  uploadSelectImageToFireBase: imgUri =>
    dispatch(authActionTypes.uploadSelectImageToFireBase(imgUri)),
});

export default connect(mapStateToProps, dispatchToProps)(CreateAccountScreen);
