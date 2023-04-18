import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Stops from '../../../pages/Stops/stops';
import Favorite from '../../../pages/Favorite/Favorite';
import Parking from '../../../pages/Parking/Parking';
import SvgAuto from '../../../assets/auto';
import SvgStar from '../../../assets/star';
import SvgMarker from '../../../assets/marker';

const Tab = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: () => {
            return <SvgStar />
          }
        }}
        name="Stops"
        component={Stops}
      />
      <Tab.Screen 
        options={{
            title: '',
            tabBarIcon: () => {
              return <SvgMarker />
            }
          }}
      name="Favorite" component={Favorite} />
      <Tab.Screen
        options={{
            title: '',
            tabBarIcon: () => {
              return <SvgAuto />
            }
          }}
      name="Parcking" component={Parking} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
