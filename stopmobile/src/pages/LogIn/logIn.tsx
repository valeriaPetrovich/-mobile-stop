import React, {useState, useCallback, useEffect} from 'react';
import styles from './logIn.styles';
import {View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setEmailSlise, setPasswordSlise} from '../../store/redusers/loginSlice';
import InputButton from '../../components/Button/InputButton';
import TextInput from '../../components/TextInput/TextInput';
import {signInUser} from '../../constant/firebase';
import { startSession,isLoggedIn } from '../../constant/storage';
import { setloginCheckSlise } from '../../store/redusers/logInCheckCSlice';

const logo = require('../../assets/logo/MySpace.png');

function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const dispatch = useDispatch();

  const checkIfLoggedIn = async () => {
    try {
      const loggedIn = await isLoggedIn();
      dispatch(setloginCheckSlise(loggedIn))
    } catch (error) {
      console.error(`Error checking session: ${error}`);
    }
  };


  const dispatchCreades = async () => {
      if(password==='' && email==='')
      {
        setErrorEmail(true);
        setErrorPassword(true);
      }
      else
      if(email==='')
      {
        setErrorEmail(true);
        setErrorPassword(false);
      }
      else
      if(password==='')
      {
        setErrorEmail(false);
        setErrorPassword(true);
      }
    let loginResponse = await signInUser(email, password);
    startSession(loginResponse.user);
    dispatch(setEmailSlise(email));
    dispatch(setPasswordSlise(password));
    setErrorPassword(false);
    setErrorEmail(false);
    checkIfLoggedIn();
  };

  useEffect(() => {
    dispatch(setEmailSlise(email));
    dispatch(setPasswordSlise(password));
  }, [email, password]);

  return (
    <View style={styles.blockLogin}>
      <Image source={logo} />
      <TextInput
        children="Your Email Address"
        onChangeText={e => setEmail(e)}
        errorMessage={errorEmail ? 'Введите email' : ''
      }
      secureTextEntry={false}
      />
      <TextInput
        children="Password"
        onChangeText={e => setPassword(e)}
        errorMessage={errorPassword ? 'Введите пароль' : ''}
        secureTextEntry={true}
      />
      <InputButton children={'Вход'} onPress={dispatchCreades} />
    </View>
  );
}

export default LogIn;
