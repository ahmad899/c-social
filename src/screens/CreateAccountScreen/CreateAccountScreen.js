import React from 'react';
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
const CreateAccountScreen = ({navigation}) => {
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
            <TextInput
              placeholder={'E-mail Address'}
              placeholderTextColor={'grey'}
              style={style.textInputStyle}
            />
            <TextInput
              placeholder={'Password'}
              placeholderTextColor={'grey'}
              style={style.textInputStyle}
            />
          </View>
          <View style={style.buttonsContainer}>
            <TouchableOpacity style={style.signUpBtn}>
              <Text style={style.signUpText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={style.orText}>OR</Text>
            <Pressable onPress={() => navigation.navigate('SignUpWithNumber')}>
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
export default CreateAccountScreen;
