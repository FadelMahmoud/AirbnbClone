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

import { Amplify } from '@aws-amplify';
//import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import { withAuthenticator, Button, Heading } from 'aws-amplify-react-native';

// import '@aws-amplify/ui/dist/style.css';

//import '@aws-amplify/ui-react/dist/styles';


/* src/App.js */
function App({signOut, user}) {
  // Todo logic here

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router/>
      {/* Add Todo JSX here  */}
      {/* <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button> */}
    </>
  );
}

export default withAuthenticator(App);

// const App: () => Node = () =>  {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
      
//       <Router/>
      
//       {/* <SafeAreaView> */}
//         {/* <HomeScreen /> */}
//         {/* <SearchResultsScreen /> */}
//         {/* <GuestsScreen /> */}
//         {/* <DestinationSearchScreen /> */}
//       {/* </SafeAreaView> */}

//       {/* Add Todo JSX here 
//       <Heading level={1}>Hello {user.username}</Heading>
//       <Button onClick={signOut}>Sign out</Button> */}
//     </>
//   );
// };

// export default App;
