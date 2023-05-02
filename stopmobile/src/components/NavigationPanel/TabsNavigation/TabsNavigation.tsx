import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Stops from '../../../pages/Stops/stops';
import Favorite from '../../../pages/Favorite/Favorite';
import Profile from '../../../pages/Profile/Profile/Profile';
import SvgStar from '../../../assets/star';
import SvgMarker from '../../../assets/marker';
import SvgProfile from '../../../assets/profile';

const Tab = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: () => {
            return <SvgProfile />;
          },
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: () => {
            return <SvgMarker />;
          },
        }}
        name="Stops"
        component={Stops}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: () => {
            return <SvgStar />;
          },
        }}
        name="Favorite"
        component={Favorite}
      />
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
