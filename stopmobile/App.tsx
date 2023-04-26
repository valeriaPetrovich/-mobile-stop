import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { setupStore } from './src/store';
import { Provider } from 'react-redux';
import NavigationPanel from './src/components/NavigationPanel/navigationPanel';


function App(): JSX.Element {

  const store = setupStore();

  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
     <NavigationPanel/>
    </SafeAreaView>
    </Provider>
  );
}

export default App;
