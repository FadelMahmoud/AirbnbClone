/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';

import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* input component*/}

      <GooglePlacesAutocomplete
        placeholder='Where are you going ?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        suppressDefaultStyles
        styles={{
          inputText: styles.textInput,
        }}
        query={{
          key: 'AIzaSyAuxqvxNKY0rUj8CUU3tOtIfzBFsfvxYfw',
          language: 'en',
          type: '(cities)',
        }}
        renderRow={ (item) => <SuggestionRow item={item} /> }
      />

    </View>
  );
};

export default DestinationSearchScreen;
