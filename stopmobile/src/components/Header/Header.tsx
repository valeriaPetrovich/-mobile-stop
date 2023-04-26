import React, {useCallback} from 'react';
import styles from './Header.style';
import {
  ScrollView,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {Text, Button} from 'react-native-elements';
import SvgOut from '../../assets/out';

function Header({children, back}) {
  return (
    <View style={styles.HeaderBlock}>
      {back}
      <Text style={styles.HeaderTitle}>{children}</Text>
    </View>
  );
}

export default Header;
