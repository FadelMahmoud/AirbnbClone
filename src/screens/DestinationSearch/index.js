/* eslint-disable prettier/prettier */
import { FlatList, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';

import styles from './styles.js';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = () => {

    const {inputText, setInputText} = useState('');

  return (
    <View style={styles.container}>
      {/* input component*/}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going ?"
        value={inputText}
        onChangeText={setInputText}
      />


      {/* list of destinations*/}
      <FlatList
        data={searchResults}
        renderItem={({item}) =>
          <View style={styles.row}>
            <View style={styles.iconContainer}>  
              <Entypo name={'location-pin'} size={35} color="black" /> 
            </View>

            <Text> {item.description}</Text> 
          </View>
             }
      />

    </View>
  );
};

export default DestinationSearchScreen;
