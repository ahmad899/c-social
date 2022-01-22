import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  animatedContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
    height: height / 1.5,
    borderTopColor: 'grey',
    borderWidth: 0.1,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: -10,
    },
    shadowOpacity: 9,
    shadowRadius: 20.0,
    elevation: 24,
  },

  bottonContainer: {
    width: width / 5,
    height: 5,
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottonLine: {
    width: width / 5,
    backgroundColor: 'grey',
    height: 7,
    margin: 10,
    borderRadius: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    width,
    alignItems: 'center',
  },
});
export default style;
