import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const BottomSheetAnimation = () => {
  const bottom = useRef(new Animated.Value(height / 2)).current;
  const [openClose, setopenClose] = useState(true);
  console.log(bottom);
  const openBottom = () =>
    Animated.timing(bottom, {
      toValue: height / 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();

  const closeBottom = () => {
    if (openClose)
      Animated.spring(bottom, {
        toValue: height - 150,
        duration: 100,
        useNativeDriver: true,
      }).start(() => setopenClose(false));
    else
      Animated.spring(bottom, {
        toValue: height / 2,
        duration: 100,
        useNativeDriver: true,
      }).start(() => setopenClose(true));
  };
  /*   const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (_, gesture) => {
        bottom.setOffset(bottom._value);

        if (gesture.dy <= height / 2.5) bottom.setOffset(bottom._value);
        else bottom.setOffset(height / 2.5);
      },
      onPanResponderMove: (_, gesture) => {
        if (gesture.dy <= height / 2.5) bottom.setValue(gesture.dy);
        else bottom.setValue(height / 2.5);
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy <= height - height / 2) {
               Animated.timing(bottom, {
            toValue: height - 100,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        }
        bottom.flattenOffset();
      },
    }),
  ).current;
 */
  return (
    <Animated.View
      style={{
        position: 'absolute',
        width,
        height: '100%',
        backgroundColor: '#aaa',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 10,
        transform: [{translateY: bottom}],
      }}>
      <ScrollView>
        <TouchableOpacity
          style={{
            borderTopWidth: 6,
            borderRadius: 100,
            width: 50,
            alignSelf: 'center',
          }}
          onPress={closeBottom}
        />
        <Text>sdfsd</Text>
      </ScrollView>
    </Animated.View>
  );
};

export default BottomSheetAnimation;
