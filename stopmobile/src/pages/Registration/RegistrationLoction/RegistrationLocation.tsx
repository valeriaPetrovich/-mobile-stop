import React, {useCallback, useState} from 'react';
import styles from './RegistrationLocation.styles';
import mainStyles from '../Registration.style';
import {View, Image} from 'react-native';
import {Input, Button, CheckBox} from 'react-native-elements';
import RegistrationSubTitle from '../../../components/RegistrationSubTitle/RegistrationSubTitle';
import TextInput from '../../../components/TextInput/TextInput';
import InputButton from '../../../components/Button/InputButton';

const logo = require('../../../assets/logo/MySpace.png');

function RegistrationLocation({navigation}) {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(false);

  const pressButton = useCallback(() => {
    if (userName !== '') {
      setError(false);
      navigation.navigate('RegistrationPassword');
    } else {
      setError(true);
    }
  }, [userName]);

  return (
    <View style={mainStyles.Container}>
      <Image source={logo} />
      <View style={mainStyles.TextContainer}>
        <RegistrationSubTitle
          children={
            'Мы хотим познакомиться с вами поближе. Как вас зовут и в каком городе вы ищете свободные места для парковки?'
          }
        />
        <TextInput
          children="Введите своё имя"
          onChangeText={e => setUserName(e)}
          errorMessage={error ? 'Введите пожалуйста своё имя' : ''}
        />
        {/* <Dropdown></Dropdown> для определения города где есть адреса */}
      </View>
      <View style={{marginTop: 380}}>
        <InputButton children={'Следующий шаг'} onPress={pressButton} />
      </View>
    </View>
  );
}

export default RegistrationLocation;
