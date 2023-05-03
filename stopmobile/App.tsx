import React,{useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {setupStore} from './src/store';
import {Provider} from 'react-redux';
import NavigationPanel from './src/components/NavigationPanel/navigationPanel';
import { isLoggedIn, endSession } from './src/constant/storage';
import { AppState, Alert } from 'react-native';

function App(): JSX.Element {
  const store = setupStore();
  const checkIfLoggedIn = async () => {
    const loggedIn = await isLoggedIn();
    console.log(loggedIn);
    if (loggedIn) {
      console.log('User is logged in');
    } else {
      console.log('User is not logged in');
    }
  }

  useEffect(()=>{
    checkIfLoggedIn();
  },)
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationPanel />
      </SafeAreaView>
    </Provider>
  );
}

export default App;


  // function handleAppStateChange(nextAppState) {
  //   if (nextAppState === 'background') {
  //     Alert.alert('Приложение было свернуто');
  //     endSession();
  //   }
  // }
  
  // useEffect(() => {
  //   AppState.addEventListener('change', handleAppStateChange);
  //   return () => {
  //    // AppState.removeEventListener('change', handleAppStateChange);
  //   };
  // }, []);