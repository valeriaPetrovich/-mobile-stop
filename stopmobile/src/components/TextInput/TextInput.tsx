import React, {useCallback} from 'react';
import styles from './TextInput.style';
import {Input} from 'react-native-elements';

function TextInput({children, onChangeText, errorMessage,secureTextEntry}) {
  return <Input placeholder={children} onChangeText={onChangeText} inputStyle={styles.Input} errorMessage={errorMessage} secureTextEntry={secureTextEntry} />;
}

export default TextInput;
