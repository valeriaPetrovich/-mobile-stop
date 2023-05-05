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
import RegistrationHeader from '../RegisrationHeader/RegisrationHeader';

function RegistrationPassword({navigation}) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [repedpassword, setRepedPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState('');
  const [errorRepedPassword, setRepedErrorPassword] = useState(false);
  const [errorRepedMessages, setErrorRepedMessages] = useState('');

  const pressButton = useCallback(() => {
    if (password === '') {
      setErrorPassword(true);
      setRepedErrorPassword(false);
      setErrorMessages('Введите пароль');
    } else if (password !== '' && password !== repedpassword) {
      setRepedErrorPassword(true);
      setErrorRepedMessages('Пароли не совпадают');
    } else if (password === '' && repedpassword === '') {
      setErrorPassword(true);
      setRepedErrorPassword(true);
      setErrorMessages('Введите пароль');
      setErrorRepedMessages('Повторите пароль');
    }
    else if( password === repedpassword &&
      password !== '' &&
      repedpassword !== '' && password.length<6){
        setErrorPassword(true);
        setRepedErrorPassword(true);
        setErrorMessages('Пароль должен сожержать не менее 6 символов');
        setErrorRepedMessages('Пароль должен сожержать не менее 6 символов');
    }
    else 
    if (
      password === repedpassword &&
      password !== '' &&
      repedpassword !== ''&&
      password.length>=6
    ) {
      dispatch(setRegistrationPasswordSlise(password));
      setErrorPassword(false);
      setRepedErrorPassword(false);
      navigation.navigate('SuccessfulRegistraion')
    }
    
  }, [password, repedpassword]);

  return (
    <View style={mainStyles.Container} >
      <RegistrationHeader onPress={() => navigation.goBack()} />
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
        errorMessage={ errorPassword? errorMessages:''}
        secureTextEntry={true}
      />
      <TextInput
        children="Повторите пароль"
        onChangeText={e => setRepedPassword(e)}
        errorMessage={errorRepedPassword?errorRepedMessages:''}
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
