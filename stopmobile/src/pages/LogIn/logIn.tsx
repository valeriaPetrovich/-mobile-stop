import React, {useState, useCallback, useEffect} from 'react';
import styles from './logIn.styles';
import {
  View,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setEmailSlise, setPasswordSlise} from '../../store/redusers/loginSlice';

function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const[login,setLogin] = useState(false); //for loading
  const dispatch = useDispatch();

  const ema = useSelector(state => state.login.email);
  const pas = useSelector(state => state.login.password);

  useEffect(() => {
    dispatch(setEmailSlise(email));
    dispatch(setPasswordSlise(password));
  }, [email, password]);

  // const dispatchCreades = () => {
  //   if (ema === 's' && pas === 's') {
  //     navigation.navigate('Tabs')
  //   }
  // };

  const dispatchCreades = useCallback(() => {
    if (ema === 's' && pas === 's') {
      navigation.navigate('Tabs');
    }
  }, [ema, pas]);

  return (
    <View style={styles.blockLogin}>
      <Input placeholder="Your Email Address" onChangeText={e => setEmail(e)} />
      <Input placeholder="Password" onChangeText={e => setPassword(e)} />
      <Button title="Input" onPress={dispatchCreades} />
    </View>
  );
}

export default LogIn;
