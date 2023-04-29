import React, {useCallback, useState} from 'react';
import styles from './SuccessfulRegistraion.style';
import mainStyles from '../Registration.style';
import {View, Image} from 'react-native';
import RegistrationSubTitle from '../../../components/RegistrationSubTitle/RegistrationSubTitle';
import RegistrationTitle from '../../../components/RegistrationTitle/RegistrationTitle';
import InputButton from '../../../components/Button/InputButton';
import { useSelector } from 'react-redux';
import { createUser } from '../../../constant/firebase';
import { startSession } from '../../../constant/storage';

const funImage = require('../../../assets/logo/Successful.png');

function SuccessfulRegistraion({navigation}) {
  
  const registrationEmail = useSelector((state)=>state.registration.email);
  const registrationPassword = useSelector((state)=>state.registration.password);

const pressInput = async () => {
    let registerResponse = await createUser(registrationEmail, registrationPassword);
    startSession(registerResponse.user);
    navigation.navigate('Tabs');
    //navigation.navigate('LogIn');
}

  return (
    <View style={mainStyles.Container}>
      <Image source={funImage} style={styles.FunImage} />
      <View style={mainStyles.TextContainer}>
        <View style={{alignSelf:'center'}} >
        <RegistrationTitle children={'Вы это сделали!'} />
        </View>
        <RegistrationSubTitle
          children={
            'Теперь вы можете перейти на страницу входа в приложения и войти под своим аккаунтом'
          }
        />
      </View>
      <View style={{marginTop:200}}>
      <InputButton children={'Войти'} onPress={pressInput} />
      </View>
      
    </View>
  );
}

export default SuccessfulRegistraion;
