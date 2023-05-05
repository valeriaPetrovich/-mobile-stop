import React, {useCallback, useState} from 'react';
import styles from './RegistrationLocation.styles';
import mainStyles from '../Registration.style';
import {View, Image} from 'react-native';
import {Input, Button, CheckBox} from 'react-native-elements';
import RegistrationSubTitle from '../../../components/RegistrationSubTitle/RegistrationSubTitle';
import TextInput from '../../../components/TextInput/TextInput';
import InputButton from '../../../components/Button/InputButton';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { useDispatch } from 'react-redux';
import { setRegistrationNameSlise, setRegistrationCarNumberSlise } from '../../../store/redusers/registrationSlice';
import RegistrationHeader from '../RegisrationHeader/RegisrationHeader';


function RegistrationLocation({navigation}) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [error, setError] = useState(false);

  const pressButton = useCallback(() => {
    if (userName !== '') {
      setError(false);
      navigation.navigate('RegistrationPassword');
      dispatch(setRegistrationNameSlise(userName));
      dispatch(setRegistrationCarNumberSlise(carNumber));

    } else {
      setError(true);
    }
  }, [userName,carNumber]);

  return (
    <View style={mainStyles.Container}>
    <RegistrationHeader onPress={() => navigation.goBack()} />
      <View style={mainStyles.TextContainer}>
        <RegistrationSubTitle
          children={
            'Мы хотим познакомиться с вами поближе. Как вас зовут и в каком городе вы ищете свободные места для парковки?'
          }
        />
        <TextInput
          children="Введите своё имя"
          secureTextEntry={false}
          onChangeText={e => setUserName(e)}
          errorMessage={error ? 'Введите пожалуйста своё имя' : ''}
        />
         <TextInput
          children="Введите номер вайше машины"
          secureTextEntry={false}
          onChangeText={e => setCarNumber(e)}
          errorMessage={error ? 'Введите пожалуйста номер машины' : ''}
        />
        <Dropdown/>
      </View>
      <View style={{marginTop: 210}}>
        <InputButton children={'Следующий шаг'} onPress={pressButton} />
      </View>
    </View>
  );
}

export default RegistrationLocation;
