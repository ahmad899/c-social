import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 30,
    color: '#3563A8',
    margin: 5,
    marginTop: 20,
    fontWeight: '700',
  },
  profileImageStyle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 100,
    borderColor: '#3563A8',
    borderWidth: 0.7,
  },
  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    borderWidth: 0.4,
    borderColor: 'grey',
    color: 'black',
    borderRadius: 100,
    paddingHorizontal: 20,
    margin: 10,
  },
  countryNumTextInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 5,
  },
  numberTextInput: {
    width: '90%',
  },
  flagContainer: {
    borderRightWidth: 0.5,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    height: 110,
  },
  signUpBtn: {
    backgroundColor: '#3563A8',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '90%',
    height: 45,
  },
  signUpText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  orText: {
    color: 'black',
  },
  signUpWithNumberText: {
    color: '#3563A8',
  },
});
export default style;
