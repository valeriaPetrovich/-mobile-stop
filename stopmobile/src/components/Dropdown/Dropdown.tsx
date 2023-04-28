// import React, { useState } from 'react';
// import { View, Text } from 'react-native';

// const Dropdown = () => {

//   return (
// <></>
//   );
// };

// export default Dropdown;
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import styles from './Dropdown.style';

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

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [country, setCountry] = useState('');
  console.log(country);

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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          
          <View style={styles.ModalConyainer}>
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
