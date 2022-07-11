/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/SearchResults';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={() => ({
            tabBarActiveTintColor: '#f15454',
            tabBarInactiveTintColor: 'gray',
            tabBarIndicatorStyle: {
                backgroundColor: '#f15454',
            }
      })}
    >
      <Tab.Screen name={"List"} component={SearchResultScreen} />
      <Tab.Screen name={"Map"} component={SearchResultScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
