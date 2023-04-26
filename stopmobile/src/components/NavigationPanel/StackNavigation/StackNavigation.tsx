import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Parking from '../../../pages/Parking/Parking';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import LogIn from '../../../pages/LogIn/logIn';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Tabs" component={TabsNavigation} />
      <Stack.Screen name="Parking" component={Parking} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
