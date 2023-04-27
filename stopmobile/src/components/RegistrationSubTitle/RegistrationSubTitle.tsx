import React from 'react';
import styles from './RegistrationSubTitle.styles';
import {Text} from 'react-native-elements';

function RegistrationSubTitle({children}) {
  return (
   <>
    <Text style={styles.SubTitle} >{children}</Text>
   </>
  );
}

export default RegistrationSubTitle;