import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ProfilePage: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal:30,
    paddingVertical: 60,
    backgroundColor:'white',
  },
  dataConteiner:{
  display:'flex',
  gap:30,
  },
  dataUser:{
    display:'flex',
    gap:20,
  },
  dropdownContainer:{
   justifyContent:'flex-end',
   marginBottom:160,
  }

});
