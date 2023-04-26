import React, {useCallback, useState} from 'react';
import {Alert, Modal, Text, Pressable, View} from 'react-native';
import styles from './ModalWindowl.style';
import SvgBurger from '../../../assets/burger';

const ModalWindow = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
              onPress={() => setModalVisible(!modalVisible)}>
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
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
          <Text>Выход</Text>
      </Pressable>
    </View>
  );
};



export default ModalWindow;