/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
import {Marker} from 'react-native-maps';

const CustomMarker = (props) => {

    const {coordinate, price , isSelected , onPress} = props;

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{ backgroundColor: isSelected ? 'black' : 'white', padding: 5,
          borderRadius: 20, borderColor: 'gray', borderWidth: 1,
        }}>

        <Text style={{fontWeight: 'bold', color: isSelected ? 'white' : 'black'}}>${price}</Text>

      </View>
    </Marker>
  );
};

export default CustomMarker;
