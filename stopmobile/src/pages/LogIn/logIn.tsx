import React, {useState} from 'react';
import styles from './logIn.styles';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {setEmailSlise, setPasswordSlise} from '../../store/redusers/loginSlice';

//style={styles.MenuScreenCopywriteText}

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const dispatchCreades = () => {
    dispatch(setEmailSlise(email));
    dispatch(setPasswordSlise(password));
  };

  return (
    <ScrollView style={styles.blockLogin}>
      <View>
        <Input
          placeholder="Your Email Address"
          onChangeText={e => setEmail(e)}
        />
        <Input placeholder="Password" onChangeText={e => setPassword(e)} />
        <Button title="Input" onPress={() => dispatchCreades} />
      </View>
    </ScrollView>
  );
}

export default LogIn;
