import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 100,
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
  userNameText: {
    marginLeft: 10,
    marginBottom: 30,
    marginTop: 10,
    fontFamily: 'San Francisco',
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
    alignSelf: 'flex-start',
  },
  createPostContainer: {marginLeft: 10, marginTop: 10},
  postText: {color: 'black', fontFamily: 'San Francisco', fontSize: 24},

  ///////mapView/////
  postContainer: {
    margin: 25,
    marginLeft: 12,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
export default style;
