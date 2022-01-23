import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import style from './style.js';
import CountryPicker, {
  Flag,
  FlagButton,
} from 'react-native-country-picker-modal';
import RigsterImageCropPicker from '../../../components/RigsterImageCropPicker/RigsterImageCropPicker';
import * as actionTypes from '../../../redux/actions/authActionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ConfirmNumberScreen from './ConfirmNumberScreen.js';
import LoadingScreen from '../../LoadingScreen/LoadingScreen.js';
const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const imageUriFromStore = useSelector(state => state.authReducer.imgUri);
  let isPhoneConfirmed = useSelector(
    state => state.authReducer.isPhoneConfirmed,
  );
  const isSigningUp = useSelector(state => state.authReducer.isSigningUp);
  const [imageUri, setimageUri] = useState(imageUriFromStore);
  const dispatch = useDispatch();
  const [countryCode, setcountryCode] = useState('IL');
  const [callingCode, setcallingCode] = useState('972');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [user, setuser] = useState({});
  const imageUriFromChild = imageUri => {
    setimageUri(imageUri);
  };

  const onSendCode = () => {
    //validate the number if correct based on empty text input or start with zero
    if (phoneNumber.length > 0 && phoneNumber.length <= 10) {
      let correctNumber;
      phoneNumber[0] == '0'
        ? (correctNumber = phoneNumber.slice(1))
        : (correctNumber = phoneNumber);
      const fullNumber = '+' + callingCode + correctNumber;
      const user = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: fullNumber,
        imageUri: imageUri,
      };
      setuser({...user});
      dispatch(actionTypes.signUpWithPhoneNumber(user));
    } else alert('Enter correct number');
  };

  if (!isPhoneConfirmed) {
    if (isSigningUp) return <LoadingScreen />;
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
                  onChangeText={txt => setlastName(txt)}
                />
                <View style={[style.textInputStyle, style.countryNumTextInput]}>
                  <CountryPicker
                    withFilter
                    countryCode={countryCode}
                    withFlag
                    withAlphaFilter
                    containerButtonStyle={style.flagContainer}
                    theme={{flagSizeButton: 20}}
                    onSelect={country => {
                      setcountryCode(country.cca2);
                      setcallingCode(country.callingCode[0]);
                    }}
                  />
                  <Text style={style.callingCode}>+{callingCode}</Text>
                  <TextInput
                    placeholder={'Phone Number'}
                    placeholderTextColor={'grey'}
                    style={style.numberTextInput}
                    keyboardType="numeric"
                    maxLength={10}
                    onChangeText={txt => setphoneNumber(txt)}
                  />
                </View>
              </View>
              <View style={style.buttonsContainer}>
                <TouchableOpacity
                  style={style.signUpBtn}
                  onPress={() => onSendCode()}>
                  <Text style={style.signUpText}>Send Code</Text>
                </TouchableOpacity>
                <Text style={style.orText}>OR</Text>
                <Pressable onPress={() => navigation.goBack()}>
                  <Text style={style.signUpWithNumberText}>
                    Sign Up with Email
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
  } else
    return (
      <ConfirmNumberScreen
        dispatch={dispatch}
        navigation={navigation}
        user={user}
      />
    );
};
export default CreateAccountScreen;
