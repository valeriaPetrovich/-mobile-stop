import React from 'react';
import styles from './Profile.style';
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import RegistrationTitle from '../../../components/RegistrationTitle/RegistrationTitle';
import RegistrationSubTitle from '../../../components/RegistrationSubTitle/RegistrationSubTitle';
import SvgOut from '../../../assets/out';
import useFavorite from '../../../hooks/useFavorite';

const profileImg = require('../../../assets/logo/Profile.png');

function Profile() {
 
    const {favorites}=useFavorite();

    const favoritesItems = favorites.map((e)=>{
        return <RegistrationTitle children={`${e.name}`} key={Math.random()}/>
    })

  return (
    <View style={styles.ProfilePage}>
      <View style={styles.SettingsProfile}>
        <Image source={profileImg} style={styles.ImgProfile} />
        <TouchableOpacity style={styles.SettingsLink}>
          <RegistrationSubTitle children={'Изменить данные ползователя'} />
          <SvgOut style={styles.Icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.dataConteiner} >
      <RegistrationTitle children={'Данные пользователя'} />
        <View style={styles.dataUser} >
          <RegistrationSubTitle children={'Имя'} />
          <RegistrationTitle children={'Лера'} />
        </View>
        <View style={styles.dataUser}>
          <RegistrationSubTitle children={'Email'} />
          <RegistrationTitle children={'lerapetrovic8@gmail.com'} />
        </View>
        <View style={styles.dataUser}>
          <RegistrationSubTitle children={'Город'} />
          <RegistrationTitle children={'Минск'} />
        </View>
        <View style={styles.dataUser}>
          <RegistrationSubTitle children={'Фавориты'} />
          <ScrollView>
            {favoritesItems}
          </ScrollView>
          
        </View>
      </View>
    </View>
  );
}

export default Profile;
