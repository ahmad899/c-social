import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import style from './style.js';

const WelcomeSreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        height: '100%',
      }}>
      <StatusBar />
      <ScrollView
        contentContainerStyle={style.scrollContainer}
        scrollEnabled={true}>
        <View style={style.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={style.logoImg}
            width={120}
            height={140}
          />
          <Text style={style.headerText}>Welcome to C-soical </Text>
          <Text style={style.headerParagraph}>
            Welcome to C-social, a soical media app
          </Text>
          <TouchableOpacity
            style={style.loginButton}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={style.logInText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.signUpButton}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={style.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default WelcomeSreen;
