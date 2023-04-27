import React from 'react';
import styles from './RegistrationTitle.styles';
import {Text} from 'react-native-elements';

function RegistrationTitle({children}) {
  return (
   <>
    <Text style={styles.Title} >{children}</Text>
   </>
  );
}

export default RegistrationTitle;