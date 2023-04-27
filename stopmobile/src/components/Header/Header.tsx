import React, {useCallback} from 'react';
import styles from './Header.style';
import {
  View
} from 'react-native';
import {Text} from 'react-native-elements';


function Header({children, back, logout}) {
  return (
    <View style={styles.HeaderBlock}>
      {back}
      <Text style={styles.HeaderTitle}>{children}</Text>
      {logout}
    </View>
  );
}

export default Header;
