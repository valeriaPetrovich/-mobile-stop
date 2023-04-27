import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Parking from '../../../pages/Parking/Parking';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import LogIn from '../../../pages/LogIn/logIn';
import Input from '../../../pages/Input/Input';
import RegistrationLogin from '../../../pages/Registration/RegistrationLogin/RegistrationLogin';
import RegistrationLocation from '../../../pages/Registration/RegistrationLoction/RegistrationLocation';
import RegistrationPassword from '../../../pages/Registration/RegistrationPassword/RegistrationPassword';
import SuccessfulRegistraion from '../../../pages/Registration/SuccessfulRegistraion/SuccessfulRegistraion';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Input" component={Input} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="RegistrationLogin" component={RegistrationLogin} />
      <Stack.Screen name="RegistrationLocation" component={RegistrationLocation} />
      <Stack.Screen name="RegistrationPassword" component={RegistrationPassword} />
      <Stack.Screen name="SuccessfulRegistraion" component={SuccessfulRegistraion} />
      <Stack.Screen name="Tabs" component={TabsNavigation} />
      <Stack.Screen name="Parking" component={Parking} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
