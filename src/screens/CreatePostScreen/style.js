import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  imageStyle: {
    height: 90,
    width: 90,
    borderRadius: 100,
    resizeMode: 'cover',
    /*   borderColor: 'blue',
    borderWidth: 5, */
  },
  userNameText: {
    marginLeft: 10,
    marginBottom: 30,
    fontFamily: 'San Francisco',
    fontSize: 18,
    color: 'black',
  },
  createPostContainer: {marginLeft: 10, marginTop: 10},
  postText: {color: 'black', fontFamily: 'San Francisco', fontSize: 24},
});
export default style;
