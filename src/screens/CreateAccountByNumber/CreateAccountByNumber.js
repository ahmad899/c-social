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

const CreateAccountScreen = ({navigation}) => {
  const [countryCode, setcountryCode] = useState('IN');
  const [callingCode, setcallingCode] = useState('91');

  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      <ScrollView
        contentContainerStyle={style.scrollContainer}
        scrollEnabled={true}>
        <Text style={style.headerText}>Create new account</Text>
        <View style={style.innerContainer}>
          <Pressable>
            <Image
              style={style.profileImageStyle}
              source={require('../../../assets/profileImage.png')}
              tintColor={'#3563A8'}
            />
          </Pressable>
          <View style={style.textInputContainer}>
            <TextInput
              placeholder={'First Name'}
              placeholderTextColor={'grey'}
              style={style.textInputStyle}
            />
            <TextInput
              placeholder={'Last Name'}
              placeholderTextColor={'grey'}
              style={style.textInputStyle}
            />
            <View style={[style.textInputStyle, style.countryNumTextInput]}>
              <CountryPicker
                withFilter
                countryCode={countryCode}
                withFlag
                withAlphaFilter
                containerButtonStyle={style.flagContainer}
                theme={{flagSizeButton: 20}}
              />
              <TextInput
                placeholder={'Phone Number'}
                placeholderTextColor={'grey'}
                style={style.numberTextInput}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={style.buttonsContainer}>
            <TouchableOpacity style={style.signUpBtn}>
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
