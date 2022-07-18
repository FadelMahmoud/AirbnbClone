/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { useRoute } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {

  const route = useRoute();

  const {guests} = route.params;

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
      <Tab.Screen name={"List"} > 
        { () => (
          <SearchResultScreen guests={guests} />
        )}
      </Tab.Screen>

      <Tab.Screen name={"Map"} >
        { () => (
          <SearchResultsMap guests={guests} />
        )}
      </Tab.Screen>

    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
