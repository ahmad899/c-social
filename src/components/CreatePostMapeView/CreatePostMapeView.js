import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import style from './style';
import MapView, {Marker} from 'react-native-maps';
import {clearPost} from '../../redux/actions/homeActions/homeActionCreators';
const {width, height} = Dimensions.get('screen');

const CreatePostMapeView = ({post}) => {
  const dispatch = useDispatch();
  return (
    <View style={[style.mapContainer, {height: height * 0.3, width}]}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: post.lat,
          longitude: post.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        pitchEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
        minZoomLevel={3}>
        <Marker
          coordinate={{
            latitude: post.lat,
            longitude: post.lng,
          }}
        />
      </MapView>
      <Materiallcons
        name="cancel"
        size={30}
        style={{position: 'absolute', right: 0}}
        onPress={() => {
          dispatch(clearPost);
        }}
        color={'grey'}
      />
    </View>
  );
};

export default CreatePostMapeView;
