/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles.js';

const SuggestionRow = ({item}) => {
  return (
    <View style={styles.row} >
      <View style={styles.iconContainer}>
        <Entypo name={'location-pin'} size={35} color="black" />
      </View>

      <Text> {item.description}</Text>
    </View>
  );
};

export default SuggestionRow;
