import React, {useState, useCallback, useEffect} from 'react';
import styles from './logIn.styles';
import {
  View,
  Image
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setEmailSlise, setPasswordSlise} from '../../store/redusers/loginSlice';
import InputButton from '../../components/Button/InputButton';
import TextInput from '../../components/TextInput/TextInput';

const logo = require('../../assets/logo/MySpace.png')

function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
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
      setErrorPassword(false);
      setErrorEmail(false);
    }
    else
    if(pas==='' && ema==='')
    {
      setErrorEmail(true);
      setErrorPassword(true);
    }
    else
    if(ema==='')
    {
      setErrorEmail(true);
      setErrorPassword(false);
    }
    else
    if(pas==='')
    {
      setErrorEmail(false);
      setErrorPassword(true);
    }
  
  }, [ema, pas]);

  return (
    <View style={styles.blockLogin}>
      <Image source={logo}/>
      <TextInput children="Your Email Address" onChangeText={e => setEmail(e)} errorMessage={errorEmail?'Введите email':''}/>
      <TextInput children="Password" onChangeText={e => setPassword(e)} errorMessage={errorPassword?'Введите пароль':''}/>
      <InputButton children={'Вход'} onPress={dispatchCreades} />
    </View>
  );
}

export default LogIn;
