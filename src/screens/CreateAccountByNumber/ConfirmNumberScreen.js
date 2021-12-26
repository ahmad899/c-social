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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
const ConfirmNumberScreen = () => {
  const navigation = useNavigation();
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
              onChangeText={txt => setfirstName(txt)}
            />
          </View>
        </View>
        <View style={style.buttonsContainer}>
          <TouchableOpacity
            style={style.signUpBtn}
            onPress={() => onSendCode()}>
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
