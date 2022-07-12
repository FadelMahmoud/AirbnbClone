/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

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
      <Tab.Screen name={"Map"} component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
