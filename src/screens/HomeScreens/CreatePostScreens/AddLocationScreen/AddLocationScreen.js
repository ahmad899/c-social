import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import style from './style';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API} from '../../../../api/google';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const AddLocationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    const unsubscribe = navigation.setOptions({
      headerStyle: {borderBottom: 0},
      headerRight: () => (
        <FontAwesome
          name="location-arrow"
          size={30}
          color="#3563A8"
          onPress={onLocationHandler}
        />
      ),
    });
    return unsubscribe;
  }, [navigation, route]);

  const onLocationHandler = () => {};

  return (
    <View style={style.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: GOOGLE_PLACES_API,
          language: 'en',
        }}
        textInputProps={{placeholderTextColor: 'white'}}
        styles={{
          textInput: {color: 'black', backgroundColor: '#b7b7a4', fontSize: 18},
          textInputContainer: {margin: '2%'},
        }}
        currentLocation={true}
        currentLocationLabel="Current location"
      />
    </View>
  );
};

export default AddLocationScreen;
