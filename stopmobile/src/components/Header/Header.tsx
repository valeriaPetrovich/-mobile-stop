import React, {useLayoutEffect, useState} from 'react';
import styles from './Header.style';
import {
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';
import {Text, Button} from 'react-native-elements';
import SvgOut from '../../assets/out';

function Header({children}) {
  return (
   <View style={styles.HeaderBlock}>
    <TouchableOpacity>
        <SvgOut/>
    </TouchableOpacity>
    {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    <Text style={styles.HeaderTitle}>{children}</Text>
   </View>
  );
}

export default Header;
