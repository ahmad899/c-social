import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},

  ////////////////////////////////
  //turn on location///
  turnOnLocationContainer: {
    alignItems: 'center',
    padding: 10,
    height: 300,
  },
  locationImage: {
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
    margin: 5,
  },
  paragraph: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
    fontWeight: '400',
    padding: 10,
  },
  ///////////////////////////////
});
export default style;
