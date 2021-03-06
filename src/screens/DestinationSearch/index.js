/* eslint-disable prettier/prettier */


/*
old_google_key = AIzaSyAuxqvxNKY0rUj8CUU3tOtIfzBFsfvxYfw
 */ 
import {View} from 'react-native';
import React from 'react';

import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* input component*/}

      <GooglePlacesAutocomplete
        placeholder="Where are you going ?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          console.log("viewport" , details.geometry.viewport);
          navigation.navigate('Guests' , { viewport: details.geometry.viewport });
        }}
        fetchDetails
        suppressDefaultStyles
        styles={{
          inputText: styles.textInput,
        }}
        query={{
          key: 'PASTE_YOUR_GOOGLE_API_KEY_HEREEEEE',
          language: 'en',
          // type: '(regions)',
        }}
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
