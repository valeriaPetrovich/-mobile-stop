import React, {useState, useCallback} from 'react';
import styles from './RegistrationLogin.styles';
import mainStyles from '../Registration.style';
import {View, Text, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import RegistrationTitle from '../../../components/RegistrationTitle/RegistrationTitle';
import RegistrationSubTitle from '../../../components/RegistrationSubTitle/RegistrationSubTitle';
import InputButton from '../../../components/Button/InputButton';
import TextInput from '../../../components/TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { setRegistrationEmailSlise } from '../../../store/redusers/registrationSlice';

function RegistrationLogin({navigation}) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [error, setError] = useState(false);

  const pressInput = () => {
    navigation.navigate('LogIn');
  };

  const isValidEmail = em => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(em);
  };


  const pressToLocation  = useCallback(
    () => {
      const isValid = isValidEmail(login);
      if (login !== '' && isValid) {
        dispatch(setRegistrationEmailSlise(login));
        navigation.navigate('RegistrationLocation');
        setError(false)
      }
      else {
        setError(true);
      }
    },
    [login],
  );

  const logo = require('../../../assets/logo/MySpace.png');

  return (
    <View style={mainStyles.Container}>
      <Image source={logo} />
      <View style={mainStyles.TextContainer}>
        <RegistrationTitle children={'Зарегистрироваться в MySpace'} />
        <RegistrationSubTitle
          children={
            'Вам понадобится ваша электронная почта, чтобы зарегистрироваться и войти в себя на MySpace. Только вы можете видеть свой собственный E-Mail.'
          }
        />
        <TextInput
        children="Your Email Address"
        onChangeText={e => setLogin(e)}
        errorMessage={ error? 'Вы ввели неверную почту':''}
        />
      </View>
      <View style={styles.ButtonsContainer}>
        <InputButton children="Следующий шаг" onPress={pressToLocation} />
        <Text style={{alignSelf:'center'}} >У вас уже есть аккаунт?</Text>
        <InputButton children="Вход в систему" onPress={pressInput} />
      </View>
    </View>
  );
}

export default RegistrationLogin;


 // const pressToLocation = () => {
  //   const isValid = isValidEmail(login);
  //   if (login !== '' && isValid) {
  //     navigation.navigate('RegistrationLocation');
  //     setError(false)
  //   }
  //   else {
  //     setError(true);
  //   }
  // };