import React, {useCallback, useState} from 'react';
import styles from './RegistrationPassword.styles';
import mainStyles from '../Registration.style';
import {View, Image} from 'react-native';
import {Input, Button, CheckBox} from 'react-native-elements';
import RegistrationSubTitle from '../../../components/RegistrationSubTitle/RegistrationSubTitle';
import RegistrationTitle from '../../../components/RegistrationTitle/RegistrationTitle';
import TextInput from '../../../components/TextInput/TextInput';
import InputButton from '../../../components/Button/InputButton';
import { useDispatch } from 'react-redux';
import { setRegistrationPasswordSlise } from '../../../store/redusers/registrationSlice';

const logo = require('../../../assets/logo/MySpace.png');

function RegistrationPassword({navigation}) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [repedpassword, setRepedPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRepedPassword, setRepedErrorPassword] = useState(false);

  const pressButton = useCallback(() => {
    if (password === '') {
      setErrorPassword(true);
      setRepedErrorPassword(false);
    } else if (password !== '' && password !== repedpassword) {
      setRepedErrorPassword(true);
    } else if (password === '' && repedpassword === '') {
      setErrorPassword(true);
      setRepedErrorPassword(true);
    } else if (
      password === repedpassword &&
      password !== '' &&
      repedpassword !== ''
    ) {
      dispatch(setRegistrationPasswordSlise(password));
      setErrorPassword(false);
      setRepedErrorPassword(false);
      navigation.navigate('SuccessfulRegistraion')
    }
  }, [password, repedpassword]);

  return (
    <View style={mainStyles.Container} >
      <Image source={logo} />
      <View style={mainStyles.TextContainer}>
      <RegistrationTitle
        children={
          'Установите безопасный пароль для защиты вашей учетной записи.'
        }
      />
      <RegistrationSubTitle
        children={
          'Ваш пароль должен состоять как минимум из 6 букв, цифр или символов.'
        }
      />
      <TextInput
        children="Введите пароль"
        onChangeText={e => setPassword(e)}
        errorMessage={ errorPassword? 'Введите пароль':''}
        secureTextEntry={true}
      />
      <TextInput
        children="Повторите пароль"
        onChangeText={e => setRepedPassword(e)}
        errorMessage={errorRepedPassword?'Пароли не совпадают':''}
        secureTextEntry={true}
      />
      </View>
     <View style={{marginTop: 250}}>
     <InputButton children={'Завершить регистрацию'} onPress={pressButton} />
     </View>
    </View>
  );
}

export default RegistrationPassword;
