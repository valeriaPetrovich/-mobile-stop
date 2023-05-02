import React,{useState,useEffect} from 'react';
import styles from './Profile.style';
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import RegistrationTitle from '../../../components/RegistrationTitle/RegistrationTitle';
import RegistrationSubTitle from '../../../components/RegistrationSubTitle/RegistrationSubTitle';
import SvgOut from '../../../assets/out';
import useFavorite from '../../../hooks/useFavorite';
import ModalWindow from '../../../components/Modal/ModalBottom/ModalWindow';
import { endSession } from '../../../constant/storage';
import { isLoggedIn } from '../../../constant/storage';
import { BackHandler } from 'react-native';

const profileImg = require('../../../assets/logo/Profile.png');

function Profile({navigation}) {
 
    const {favorites}=useFavorite();

    const favoritesItems = favorites.map((e)=>{
        return <RegistrationTitle children={`${e.name}`} key={Math.random()}/>
    })

    const pressSetting = () =>{
      navigation.navigate('SettingsProfile')
    }

    const onLogout = () => {
      endSession();
      navigation.navigate("LogIn");
    }

    const [checkTab,setChekTab] = useState(false);
    const checkIfLoggedIn = async () => {
      const loggedIn = await isLoggedIn();
      console.log(loggedIn);
      if (loggedIn) {
        setChekTab(true);
      } else {
        setChekTab(false);
      }
    }
  
    useEffect(()=>{
      checkIfLoggedIn();
    },)

    useFocusEffect(
      React.useCallback(() => {
        const backAction = () => {
          if(checkTab){
            BackHandler.exitApp();
            return true;
          }
          else{
            return false;
          }
          
           
        };
        BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', backAction);
        };
      }, [checkTab,navigation])
    );


  return (
    <View style={styles.ProfilePage}>
      <View style={styles.SettingsProfile}>
        <Image source={profileImg} style={styles.ImgProfile} />
        <TouchableOpacity style={styles.SettingsLink} onPress={pressSetting} >
          <RegistrationSubTitle children={'Изменить данные ползователя'} />
          <SvgOut style={styles.Icon} />
        </TouchableOpacity>
      </View>
      <ModalWindow onPressing={onLogout} />
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
