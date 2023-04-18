import React from 'react';
import styles from './Parking.styles';
import {View,Text,SafeAreaView} from 'react-native';

function Parking() {
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

  const parkingItem = parkingPage.map((e)=>{
    return (
        <View key={e.id} style={e.status? styles.green : styles.red} >
        </View>
    )
  })

  return (
    <View style={styles.backgroundStyle}>
        <View  style={styles.parkingBlock}>
    {parkingItem}
  </View>
    </View>
    
  )
  ;
}

export default Parking;
