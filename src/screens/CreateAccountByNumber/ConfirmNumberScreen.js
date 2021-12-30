import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import * as actionTypes from '../../redux/actions/authActionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
const ConfirmNumberScreen = ({dispatch, navigation}) => {
  const [code, setcode] = useState(null);
  const confirm = useSelector(state => state.authReducer.confirm);
  const onConfirmCode = () => {
    if (code) dispatch(actionTypes.confirmCodePhoneNumber(confirm, code));
    else Alert.alert('enter a code ');
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      <Text style={style.headerText}>Confirm Code</Text>
      <ScrollView
        contentContainerStyle={[
          style.scrollContainer,
          {justifyContent: 'center'},
        ]}
        scrollEnabled={true}>
        <View style={style.innerContainer}>
          <View style={style.textInputContainer}>
            <TextInput
              placeholder={'Enter Code..... '}
              placeholderTextColor={'grey'}
              style={style.textInputStyle}
              onChangeText={txt => setcode(txt)}
            />
          </View>
        </View>
        <View style={style.buttonsContainer}>
          <TouchableOpacity
            style={style.signUpBtn}
            onPress={() => onConfirmCode()}>
            <Text style={style.signUpText}>Confirm Code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.signUpBtn}
            onPress={() => onResendCode()}>
            <Text style={style.signUpText}>Resend Code</Text>
          </TouchableOpacity>
          <Text style={style.orText}>OR</Text>
          <Pressable onPress={() => navigation.replace('SignUp')}>
            <Text style={style.signUpWithNumberText}>Sign Up with Email</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmNumberScreen;
