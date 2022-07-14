/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ExploreNavigator from './ExploreNavigator';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = 'search';
            return <Fontisto name={iconName} size={size} color={color} />
          } else if (route.name === 'Saved') {
            iconName = 'heart-o';
            return <FontAwesome name={iconName} size={size} color={color} />
          } else if (route.name === 'Airbnb') {
            iconName = 'airbnb';
            return <FontAwesome5 name={iconName} size={size} color={color} />
          } else if (route.name === 'Messages') {
            iconName = 'message-square';
            return <Feather name={iconName} size={size} color={color} />
          } else if (route.name === 'Profile') {
            iconName = 'user';
            size= 34;
            return <EvilIcons name={iconName} size={size} color={color} />
          }

        },
        tabBarActiveTintColor: '#f15454',
        headerShown: false,
      })}  
    >
      <Tab.Screen 
        name={"Explore"} 
        component={ExploreNavigator}       
      />

      <Tab.Screen 
        name={"Saved"} 
        component={HomeScreen} 
      />

      <Tab.Screen 
        name={"Airbnb"} 
        component={HomeScreen}
      />

        <Tab.Screen 
        name={"Messages"} 
        component={HomeScreen}
      />

        <Tab.Screen 
        name={"Profile"} 
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
