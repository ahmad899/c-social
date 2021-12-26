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
import ImageCropPicker from '../../components/ImageCropPicker/ImageCropPicker';
import * as actionTypes from '../../redux/actions/authActionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const imageUriFromStore = useSelector(state => state.authReducer.imgUri);
  const isPhoneConfirmed = useSelector(
    state => state.authReducer.isPhoneConfirmed,
  );
  const [imageUri, setimageUri] = useState(imageUriFromStore);
  const dispatch = useDispatch();
  const [countryCode, setcountryCode] = useState('IL');
  const [callingCode, setcallingCode] = useState('972');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [code, setCode] = useState('');

  const imageUriFromChild = imageUri => {
    setimageUri(imageUri);
  };
  const onSendCode = () => {
    let correctNumber;
    phoneNumber[0] == '0'
      ? (correctNumber = phoneNumber.slice(1))
      : (correctNumber = phoneNumber);
    const fullNumber = '+' + callingCode + correctNumber;
    console.log(fullNumber);
    dispatch(actionTypes.signUpWithPhoneNumber(fullNumber));
    if (isPhoneConfirmed) navigation.push('ConfirmNumberScreen');
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      <ScrollView
        contentContainerStyle={style.scrollContainer}
        scrollEnabled={true}>
        <Text style={style.headerText}>Create new account</Text>

        <View style={style.innerContainer}>
          <View style={style.upperContainer}>
            <ImageCropPicker
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
              <Text style={style.signUpWithNumberText}>Sign Up with Email</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateAccountScreen;
