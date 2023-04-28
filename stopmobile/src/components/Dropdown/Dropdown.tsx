import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import styles from './Dropdown.style';
import { setSettingProfileCountrySlise } from '../../store/redusers/settingProfileSlice';
import { useDispatch } from 'react-redux';

const options = [
  {
    option: 'Minsk',
    index: 1,
  },
  {
    option: 'Gomel',
    index: 2,
  },
  {
    option: 'Brest',
    index: 3,
  },
];

const Dropdown = ({className}) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [country, setCountry] = useState('');
  
  useEffect(()=>{
 dispatch(setSettingProfileCountrySlise(country));
  },[country])

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        style={styles.DropdownButton}>
        <Text style={styles.TextDropdown}>
          {country === '' ? 'Веберете город' : country}
        </Text>
      </TouchableOpacity>
      <Modal visible={isVisible} transparent={true}>
        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'},className]}>
          
          <View style={[styles.ModalConyainer]}>
            {options.map(e => (
              <TouchableOpacity
                key={e.index}
                onPress={() => {
                  setIsVisible(false);
                  setCountry(e.option);
                }}>
                <Text style={styles.TextDropdown}>{e.option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;
