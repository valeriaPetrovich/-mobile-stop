import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ProfilePage: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal:30,
    paddingVertical: 60,
  },
  SettingsProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  SettingsLink: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  ImgProfile: {
    width: 100,
    height: 100,
  },
  Icon: {
    transform: [{rotate: '180deg'}],
  },
  dataConteiner:{
    marginTop:90,
  display:'flex',
  gap:30,
  },
  dataUser:{
    display:'flex',
    flexDirection:'row',
    gap:20,
  }

});
