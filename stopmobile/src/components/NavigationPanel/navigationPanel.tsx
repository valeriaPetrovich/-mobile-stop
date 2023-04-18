import React from 'react';
//import styles from './navigationPanel.style';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation/StackNavigation';

function NavigationPanel() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default NavigationPanel;
