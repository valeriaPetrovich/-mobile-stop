import React from 'react';
import styles from './RegistrationSubTitle.styles';
import {Text} from 'react-native-elements';

function RegistrationSubTitle({children,className}) {
  return (
   <>
    <Text style={[styles.SubTitle,className]} >{children}</Text>
   </>
  );
}

export default RegistrationSubTitle;