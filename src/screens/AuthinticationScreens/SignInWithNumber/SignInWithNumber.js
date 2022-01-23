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
import * as actionTypes from '../../../redux/actions/authActionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ConfirmSignInWithNumber from './ConfirmSignInWithNumber.js';
const SignInWithNumber = () => {
  const navigation = useNavigation();
  let isPhoneConfirmed = useSelector(
    state => state.authReducer.isPhoneConfirmed,
  );
  const isSigningIn = useSelector(state => state.authReducer.isSigningIn);

  const dispatch = useDispatch();
  const [countryCode, setcountryCode] = useState('IL');
  const [callingCode, setcallingCode] = useState('972');

  const [phoneNumber, setphoneNumber] = useState('');

  const onSendCode = () => {
    //validate the number if correct based on empty text input or start with zero
    if (phoneNumber.length > 0 && phoneNumber.length <= 10) {
      let correctNumber;
      phoneNumber[0] == '0'
        ? (correctNumber = phoneNumber.slice(1))
        : (correctNumber = phoneNumber);
      const fullNumber = '+' + callingCode + correctNumber;
      dispatch(actionTypes.LogInWithPhoneNumber(fullNumber));
    } else alert('Enter correct number');
  };
  if (!isPhoneConfirmed)
    return (
      <SafeAreaView style={style.container}>
        <StatusBar />
        <Text style={style.headerText}>Create new account</Text>
        <ScrollView
          contentContainerStyle={style.scrollContainer}
          scrollEnabled={true}>
          <View style={style.innerContainer}>
            <View style={style.textInputContainer}>
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
  else
    return (
      <ConfirmSignInWithNumber dispatch={dispatch} navigation={navigation} />
    );
};
export default SignInWithNumber;
