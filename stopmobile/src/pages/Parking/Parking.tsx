import React from 'react';
import styles from './Parking.styles';
import {View, Text, ScrollView, Button, TouchableOpacity} from 'react-native';
import useStreets from '../../hooks/useStreets';
import Header from '../../components/Header/Header';
import SvgOut from '../../assets/out';

function Parking({route, navigation}) {
  const {item} = route.params;

  const {streets} = useStreets();

  const streetsParck = streets.map(e => {
    const parkingItem = e.parkingPage.map(e => {
      return (
        <View key={e.id} style={e.status ? styles.green : styles.red}></View>
      );
    });
    if (e.id === item) {
      return (
        <View style={styles.backgroundStyle}>
          <Header
            children={e.name}
            back={
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <SvgOut />
              </TouchableOpacity>
            }
            ></Header>

          <View style={styles.parkingBlock}>{parkingItem}</View>
        </View>
      );
    }
  });
  return <ScrollView>{streetsParck}</ScrollView>;
}

export default Parking;
