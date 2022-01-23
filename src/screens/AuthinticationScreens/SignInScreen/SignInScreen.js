import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as actionTypes from '../../../redux/actions/authActionTypes';
import LoadingScreen from '../../LoadingScreen/LoadingScreen.js';
import style from './style.js';

const SignInScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isSigningIn = useSelector(state => state.authReducer.isSigningIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLoginBtn = () => {
    const user = {
      email: email,
      password: password,
    };
    dispatch(actionTypes.signInFirebase(user));
  };
  if (isSigningIn) return <LoadingScreen />;
  else
    return (
      <SafeAreaView style={{height: '100%'}}>
        <StatusBar />
        <ScrollView contentContainerStyle={style.container}>
          <Text style={style.headerText}>Sign In</Text>
          <View style={style.innerContainer}>
            <KeyboardAvoidingView behavior="padding">
              <TextInput
                style={style.inputText}
                placeholder="E-mail"
                placeholderTextColor="black"
                onChangeText={txt => setEmail(txt)}></TextInput>
              <TextInput
                style={style.inputText}
                placeholder="password"
                secureTextEntry
                placeholderTextColor="black"
                onChangeText={txt => setPassword(txt)}></TextInput>
              <Pressable onPress={() => navigation.push('ResetPassScreen')}>
                <Text style={style.forgotPass}>Forgot Password?</Text>
              </Pressable>
              <TouchableOpacity
                style={style.logInButton}
                onPress={() => onLoginBtn()}>
                <Text style={style.logInButtonText}>Log In</Text>
              </TouchableOpacity>
              <Text style={style.Or}>OR</Text>
              <TouchableOpacity
                style={style.logFaceAppleBtn}
                onPress={() => dispatch(actionTypes.onFacbookLogIn())}>
                <Text style={style.btnText}>Log In with facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.logFaceAppleBtn, style.appleBtn]}>
                <Text style={style.btnText}>Sign In with apple</Text>
              </TouchableOpacity>
              <Pressable onPress={() => navigation.push('SignInWithNumber')}>
                <Text style={style.logWithNum}>Log In with phone number</Text>
              </Pressable>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};
export default SignInScreen;
