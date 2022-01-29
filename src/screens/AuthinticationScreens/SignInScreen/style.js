import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 30,
    color: '#3563A8',
    margin: 5,
    marginTop: 20,
    fontWeight: '700',
  },
  innerContainer: {
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
    height: '70%',
    flexGrow: 1,
  },
  inputText: {
    width: '100%',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 45,
    color: 'black',
  },
  forgotPass: {
    color: '#3563A8',
    textAlign: 'right',
    marginHorizontal: 10,
  },
  logInButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#3563A8',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 30,
  },
  logInButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  Or: {
    alignSelf: 'center',
    marginVertical: 30,
    color: 'black',
  },
  logFaceAppleBtn: {
    width: '90%',
    height: 40,
    backgroundColor: '#3563A8',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  appleBtn: {
    backgroundColor: 'black',
  },
  btnText: {
    color: 'white',
  },
  logWithNum: {
    alignSelf: 'center',
    marginVertical: 15,
    color: '#3563A8',
  },
});

export default style;
