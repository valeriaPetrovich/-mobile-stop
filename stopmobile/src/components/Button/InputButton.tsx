import React, {useCallback} from 'react';
import styles from './InputButton.styles';
import {Button} from 'react-native-elements';


function InputButton({children, onPress }) {
  return (
   <Button title={children} buttonStyle={styles.Button} onPress={onPress}></Button>
  );
}

export default InputButton;
