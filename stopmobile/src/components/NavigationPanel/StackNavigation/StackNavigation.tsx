import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Parking from '../../../pages/Parking/Parking';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import LogIn from '../../../pages/LogIn/logIn';
import Input from '../../../pages/Input/Input';
import RegistrationLogin from '../../../pages/Registration/RegistrationLogin/RegistrationLogin';
import RegistrationLocation from '../../../pages/Registration/RegistrationLoction/RegistrationLocation';
import RegistrationPassword from '../../../pages/Registration/RegistrationPassword/RegistrationPassword';
import SuccessfulRegistraion from '../../../pages/Registration/SuccessfulRegistraion/SuccessfulRegistraion';
import SettingsProfile from '../../../pages/Profile/SettingsProfile/SettingsProfile';
import {useSelector} from 'react-redux';
import {AppState} from 'react-native';
import AnimationScreen from '../../../pages/AnimationScreen/AnimationScreen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  const logIn = useSelector(state => state.loginCheck.value);
  const [animation, setAnimation] = useState(false);
  AppState.addEventListener('change', state => {
    if (state === 'active') {
      const timeout = setTimeout(() => {
        setAnimation(true);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  });
  console.log(logIn);
  return animation ? (
    logIn ? (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={TabsNavigation} />
        <Stack.Screen name="Parking" component={Parking} />
        <Stack.Screen name="SettingsProfile" component={SettingsProfile} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="RegistrationLogin" component={RegistrationLogin} />
        <Stack.Screen
          name="RegistrationLocation"
          component={RegistrationLocation}
        />
        <Stack.Screen
          name="RegistrationPassword"
          component={RegistrationPassword}
        />
        <Stack.Screen
          name="SuccessfulRegistraion"
          component={SuccessfulRegistraion}
        />
      </Stack.Navigator>
    )
  ) : (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;

