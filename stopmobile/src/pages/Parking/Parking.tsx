import React from 'react';
import styles from './Parking.styles';
import {View, Text, ScrollView,Button,TouchableOpacity} from 'react-native';
import useStreets from '../../hooks/useStreets';
import Header from '../../components/Header/Header';
import SvgOut from '../../assets/out';

function Parking({route,navigation}) {
  const {item} = route.params;
  console.log(item)
  const parkingPage = [
    {
      id: 1,
      status: true,
    },
    {
      id: 2,
      status: false,
    },
    {
      id: 3,
      status: false,
    },
    {
      id: 4,
      status: true,
    },
    {
      id: 5,
      status: false,
    },
    {
      id: 6,
      status: false,
    },
    {
      id: 7,
      status: false,
    },
    {
      id: 8,
      status: true,
    },
  ];

  const {streets} = useStreets();

  const parkingItem = parkingPage.map(e => {
    return (
      <View key={e.id} style={e.status ? styles.green : styles.red}></View>
    );
  });
  const streetsParck = streets.map(e => {
    if (e.id === item) {
      return (
        <View style={styles.backgroundStyle}>
          
          <Header children={e.name} back={<TouchableOpacity onPress={() => navigation.goBack()}><SvgOut/></TouchableOpacity>}></Header>
          
          <View style={styles.parkingBlock}>{parkingItem}</View>
        </View>
      );
    } 
  });
  return <ScrollView>{streetsParck}</ScrollView>;
}

export default Parking;
