import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  userName: {
    fontFamily: 'San Francisco',
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
    marginTop: 15,
    marginBottom: 5,
  },
  profileSettingBtn: {
    fontFamily: 'San Francisco',
    fontSize: 16,
    color: '#3563A8',
    fontWeight: '600',
    height: '100%',
  },
  friendSection: {
    marginTop: 20,
  },
  friendSectionTitle: {
    fontFamily: 'San Francisco',
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
  },
  friendList: {marginTop: 10},
  noFriendsMessageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  noFriendsMessage: {
    fontFamily: 'San Francisco',
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
});
export default style;
