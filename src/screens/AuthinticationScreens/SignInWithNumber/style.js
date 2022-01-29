import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  upperContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
  },
  headerText: {
    fontSize: 30,
    color: '#3563A8',
    margin: 5,
    marginTop: 20,
    fontWeight: '700',
  },

  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    borderWidth: 1,
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
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  callingCode: {
    marginLeft: 5,
    color: 'black',
  },
  numberTextInput: {
    width: '90%',
    height: '100%',
    display: 'flex',
    paddingVertical: 10,
    color: 'black',
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
