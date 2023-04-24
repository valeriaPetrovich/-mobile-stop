import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Parking from '../../../pages/Parking/Parking';
import Stops from '../../../pages/Stops/stops';
import Favorite from '../../../pages/Favorite/Favorite';
import TabsNavigation from '../TabsNavigation/TabsNavigation';


const Stack = createNativeStackNavigator();

function StackNavigation() {
;

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Tabs" component={TabsNavigation} />
    <Stack.Screen name="Parking" component={Parking} />
  </Stack.Navigator>
  );
}

export default StackNavigation;