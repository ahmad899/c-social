import {
  View,
  Text,
  PermissionsAndroid,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useEffect, useState} from 'react';
import style from './style';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API} from '../../../../api/google';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Geolocation from 'react-native-geolocation-service';
import {Button} from 'react-native-paper';
import PlaceRow from './PlaceRow';
navigator.geolocation = require('react-native-geolocation-service');

const AddLocationScreen = () => {
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();
  const route = useRoute();
  const [islocationEnabled, setIslocationEnabled] = useState(null);
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

  useEffect(() => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(r => setIslocationEnabled(r));
  }, []);

  const onLocationHandler = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'C-Social',
          message: 'C-Social wants access to your location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        alert('permission denied');
        setIslocationEnabled(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const renderItem = ({item}) => (
    <Text style={{color: 'blakc', height: 100}}>fsdfsd</Text>
  );
  return (
    <View style={style.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: GOOGLE_PLACES_API,
          language: 'en',
        }}
        textInputProps={{placeholderTextColor: 'black'}}
        currentLocation={true}
        currentLocationLabel="Current location"
        suppressDefaultStyles
        styles={{
          textInput: style.autoCompleteTextInput,
          textInputContainer: style.autoCompleteContainer,
        }}
        fetchDetails
        renderRow={data => <PlaceRow data={data} />}
        renderDescription={data => data.description || data.vicinity}
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
      />

      {islocationEnabled ? (
        <View>
          <Text>yes</Text>
        </View>
      ) : (
        <View style={[style.turnOnLocationContainer, {width}]}>
          <Image
            source={require('../../../../../assets/earthLocation.png')}
            style={[style.locationImage, {width}]}
          />
          <Text style={style.title}>Find Places near you</Text>
          <Text style={style.paragraph}>
            To see places near you, or to check in to a specific loaction, turn
            on Location Services
          </Text>
          <Button
            mode="contained"
            color="#3563A8"
            width={width * 0.24}
            uppercase>
            Turn on
          </Button>
        </View>
      )}
    </View>
  );
};

export default AddLocationScreen;
