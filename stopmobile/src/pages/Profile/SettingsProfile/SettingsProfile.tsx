import React, { useCallback, useState } from 'react';
import styles from './SettingsProfile.style';
import {
  View
} from 'react-native';
import RegistrationTitle from '../../../components/RegistrationTitle/RegistrationTitle';
import RegistrationSubTitle from '../../../components/RegistrationSubTitle/RegistrationSubTitle';
import SvgOut from '../../../assets/out';
import useFavorite from '../../../hooks/useFavorite';
import TextInput from '../../../components/TextInput/TextInput';
import Dropdown from '../../../components/Dropdown/Dropdown';
import InputButton from '../../../components/Button/InputButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSettingProfileEmailSlise, setSettingProfileCountrySlise, setSettingProfileNameSlise } from '../../../store/redusers/settingProfileSlice';

function SettingsProfile() {
 
    const dispatch = useDispatch();
    const {favorites}=useFavorite();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');

    const pressSettingDispatch = useCallback(()=>{
      dispatch(setSettingProfileEmailSlise(email));
      dispatch(setSettingProfileNameSlise(name));
    },[email,name,country])

    const data = useSelector((state)=>state.setting);
    console.log(data);

  return (
    <View style={styles.ProfilePage}>
      <View style={styles.dataConteiner} >
      <RegistrationTitle children={' Изменить данные пользователя'} />
        <View style={styles.dataUser} >
          <RegistrationSubTitle children={'Имя'} />
          <TextInput children={'Лера'} onChangeText={(e)=>setName(e)} errorMessage={''} />
        </View>
        <View style={styles.dataUser}>
          <RegistrationSubTitle children={'Email'} />
          <TextInput children={'lerapetrovic8@gmail.com'} onChangeText={(e)=>setEmail(e)} errorMessage={''} />
        </View>
        <View style={styles.dataUser}>
          <RegistrationSubTitle children={'Город'} />
          <Dropdown className={styles.dropdownContainer}/>
        </View>
        <InputButton children={'Изменить'} onPress={pressSettingDispatch} />
      </View>
    </View>
  );
}

export default SettingsProfile;