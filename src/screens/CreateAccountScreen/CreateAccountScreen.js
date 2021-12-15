import {useNavigation} from '@react-navigation/native';
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
import {connect} from 'react-redux';
import * as authActionTypes from '../../redux/actions/authActionTypes';
import style from './style.js';

const CreateAccountScreen = props => {
  const navigation = useNavigation();
  const [firstName, setfirstName] = useState('');
  const [secondName, setsecondName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const errorMsg = props.state.errorMsg;

  const handleSubmit = () => {
    const user = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      password: password,
    };
    // console.log(props.state.authReducer.signUpError);

    props.signUpUserFirebase(user);
  };

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

const mapStateToProps = state => ({
  state: state,
});

const dispatchToProps = dispatch => ({
  signUpUserFirebase: user =>
    dispatch(authActionTypes.signUpUserFirebase(user)),
});

export default connect(mapStateToProps, dispatchToProps)(CreateAccountScreen);
