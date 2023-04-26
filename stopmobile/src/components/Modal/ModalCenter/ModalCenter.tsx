import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, View} from 'react-native';
import styles from './ModalCenter.style';
import SvgBurger from '../../../assets/burger';

const ModalCenter = () => {
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
              <Text>Вы уверены, что хотите покинуть свой аакаунт?</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
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



export default ModalCenter;