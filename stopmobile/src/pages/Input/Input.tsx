import React, {useState} from 'react';
import styles from './Input.styles';
import {View, Image} from 'react-native';
import InputButton from '../../components/Button/InputButton';

const logo = require('../../assets/logo/MySpace.png');

function Input({navigation}) {
  const pressInput = () => {
    navigation.navigate('LogIn');
  };

  const pressLogin = () => {
    navigation.navigate('RegistrationLogin');
  };

  return (
    <View style={styles.InputPage} >
      <Image source={logo} style={styles.InputImg}/>
      <View style={styles.InputButtonsContainer}>
        <InputButton children={'Войти'} onPress={pressInput}/>
        <InputButton children={'Зарегистрироваться'} onPress={pressLogin}/>
      </View>
    </View>
  );
}

export default Input;
