/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import Router from './src/navigation/Router';
import Post from './src/components/Post';
import feed from './assets/data/feed';

const post1 = feed[0];

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      
      <Router/>
      
      {/* <SafeAreaView> */}
        {/* <HomeScreen /> */}
        {/* <SearchResultsScreen /> */}
        {/* <GuestsScreen /> */}
        {/* <DestinationSearchScreen /> */}
      {/* </SafeAreaView> */}
    </>
  );
};

export default App;
