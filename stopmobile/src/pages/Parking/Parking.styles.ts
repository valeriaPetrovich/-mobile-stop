import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    backgroundStyle:{
        flex:1,
        justifyContent:'center',
        paddingVertical:'35%',
    },
    parkingBlock:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:50,
    },
    green:{
    backgroundColor:'green',
    width:'25%',
    height:80,
},
red:{
    backgroundColor:'red',
     width:'25%',
    height:80,
}
});
