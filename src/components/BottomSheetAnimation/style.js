import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 2.4,
    width: width / 1.05,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  grabber: {
    width: 60,
    borderTopWidth: 5,
    borderTopColor: '#aaa',
    backgroundColor: 'red',
    alignSelf: 'center',
  },
});

export default style;
