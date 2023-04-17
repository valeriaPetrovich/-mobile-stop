import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import LogIn from './src/pages/LogIn/logIn';
import Stops from './src/pages/Stops/stops';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { setupStore } from './src/store';
import { Provider } from 'react-redux';


function App(): JSX.Element {
  const store = setupStore();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
    <SafeAreaView style={backgroundStyle}>
      <Stops/>
   {/* <LogIn/> */}
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
