/* eslint-disable prettier/prettier */
import {Text, View, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {
  
  const navigation = useNavigation();

  return (
    <View>

      <Pressable
        style={styles.searchButton}
        onPress= { () => navigation.navigate('Destination Search') }
      >
        <Icon name={'search'} size={25} color={'#f15454'}/>
        <Text style={styles.searchButtonText}>Where are you going ?</Text>

      </Pressable>

      <ImageBackground source={require('../../../assets/images/wallpaper1.jpg')}
      style={styles.image}>

        <Text style={styles.title}>Travel around</Text>

        <Pressable
          style={styles.button}
          onPress= { () => console.log('Nearby Hostels btn clicked') }
        >
          <Text style={styles.buttonText}>Nearby Hostels</Text>

        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
