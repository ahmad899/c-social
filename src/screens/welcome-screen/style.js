import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
  },
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 40,
    height: '70%',
  },
  logoImg: {},
  headerText: {
    color: '#3563A8',
    fontSize: 30,
  },
  headerParagraph: {
    marginBottom: 30,
    color: 'black',
  },
  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#3563A8',
    borderRadius: 50,
    border: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInText: {
    color: 'white',
    fontSize: 25,
  },
  signUpButton: {
    width: '100%',
    height: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3563A8',
    borderRadius: 50,
  },
  signUpText: {
    color: '#3563A8',
    fontSize: 25,
  },
});

export default style;
