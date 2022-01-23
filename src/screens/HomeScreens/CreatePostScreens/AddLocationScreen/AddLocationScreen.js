import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API} from '../../../../api/google';

const AddLocationScreen = () => {
  return (
    <View style={style.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: GOOGLE_PLACES_API,
          language: 'en',
        }}
        suppressDefaultStyles
        styles={{textInput: {color: 'black'}}}
      />
    </View>
  );
};

export default AddLocationScreen;
