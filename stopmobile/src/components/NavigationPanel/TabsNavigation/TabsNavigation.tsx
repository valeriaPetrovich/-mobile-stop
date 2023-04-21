import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Stops from '../../../pages/Stops/stops';
import Favorite from '../../../pages/Favorite/Favorite';
import Parking from '../../../pages/Parking/Parking';
import SvgAuto from '../../../assets/auto';
import SvgStar from '../../../assets/star';
import SvgMarker from '../../../assets/marker';
import MapY from '../../../pages/MapY/MapY';
import SvgMap from '../../../assets/map-marker';

const Tab = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: () => {
            return <SvgMarker /> 
          }
        }}
        name="Stops"
        component={Stops}
      />
      <Tab.Screen 
        options={{
            title: '',
            tabBarIcon: () => {
              return <SvgStar />
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
      name="Parking" component={Parking} />
       {/* <Tab.Screen
        options={{
            title: '',
            tabBarIcon: () => {
              return <SvgMap />
            }
          }}
      name="Map" component={MapY} /> */}
    </Tab.Navigator>
  );
};

export default TabsNavigation;
