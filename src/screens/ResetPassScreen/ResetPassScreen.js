import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
import auth from '@react-native-firebase/auth';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
const ResetPassScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setloading] = useState(false);
  const onResetPass = () => {
    setloading(true);
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setloading(false);
        alert('got to your email to reset your pass');
        navigation.navigate('WelcomeScreen');
      });
  };
  if (loading) return <LoadingScreen />;
  else
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
                placeholder={'Enter Email'}
                placeholderTextColor={'grey'}
                style={style.textInputStyle}
                onChangeText={txt => setEmail(txt)}
              />
            </View>
          </View>
          <View style={style.buttonsContainer}>
            <TouchableOpacity
              style={[style.signUpBtn, {marginBottom: 10}]}
              onPress={() => onResetPass()}>
              <Text style={style.signUpText}>Reset Pass</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export default ResetPassScreen;
