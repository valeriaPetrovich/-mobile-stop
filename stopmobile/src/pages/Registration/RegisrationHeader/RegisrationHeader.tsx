import React from 'react';
import styles from './RegisrationHeader.styles';
import {View, Image,TouchableOpacity} from 'react-native';
import SvgOut from '../../../assets/out';


const logo = require('../../../assets/logo/MySpace.png');

function RegistrationHeader({onPress}:any) {
 
  return (
    <View style={styles.HeaderView} >
         <TouchableOpacity onPress={onPress}>
                <SvgOut />
              </TouchableOpacity>
      <Image source={logo} style={styles.HeaderRow} />
    </View>
  );
}

export default RegistrationHeader;