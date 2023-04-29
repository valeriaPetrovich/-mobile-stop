import React, {useEffect, useState} from 'react';
import {Alert, Modal, Text, Pressable, View} from 'react-native';
import styles from './ModalWindowl.style';
import InputButton from '../../Button/InputButton';

const ModalWindow = ({onPressing}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email,setEmail] = useState();

  // useEffect(() => {
  //   if (!isLoggedIn()) {
  //     navigation.navigate("LogIn");
  //   }
  
  //   // let session = getSession();
  //   // setEmail(session.email);
  
  //   // console.log("Your access token is: " + session.accessToken);
  // }, [navigation.navigate]);
  
 
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable>
              <Text style={styles.logoutText}>Вы уверены, что хотите покинуть свой аккаунт?</Text>
            </Pressable>
            <View
            style={styles.buttonContainer}
            >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPressing}>
              <Text style={styles.textStyle}>Да</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Нет</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <InputButton children={'Выйти из профиля'} onPress={() => setModalVisible(true)} />
    </View>
  );
};



export default ModalWindow;