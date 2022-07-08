/* eslint-disable prettier/prettier */
import { FlatList, Pressable, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';

import styles from './styles.js';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {

    const {inputText, setInputText} = useState('');

    const navigation = useNavigation();

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
          <Pressable 
            style={styles.row}
            onPress={ () => navigation.navigate('Guests') }  
          >
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={35} color="black" />
            </View>

            <Text> {item.description}</Text>
          </Pressable>
             }
      />

    </View>
  );
};

export default DestinationSearchScreen;
