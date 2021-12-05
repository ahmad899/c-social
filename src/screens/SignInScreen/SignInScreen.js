import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import style from './style.js';

const SignInScreen = () => {
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
              placeholderTextColor="black"></TextInput>
            <TextInput
              style={style.inputText}
              placeholder="password"
              placeholderTextColor="black"></TextInput>
            <Pressable>
              <Text style={style.forgotPass}>Forgot Password?</Text>
            </Pressable>
            <TouchableOpacity style={style.logInButton}>
              <Text style={style.logInButtonText}>Log In</Text>
            </TouchableOpacity>
            <Text style={style.Or}>OR</Text>
            <TouchableOpacity style={style.logFaceAppleBtn}>
              <Text style={style.btnText}>Log In with facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.logFaceAppleBtn, style.appleBtn]}>
              <Text style={style.btnText}>Sign In with apple</Text>
            </TouchableOpacity>
            <Pressable>
              <Text style={style.logWithNum}>Log In with phone number</Text>
            </Pressable>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignInScreen;
