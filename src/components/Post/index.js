/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import styles from './styles.js';

const Post = (props) => {
  return (
    <View style={styles.container}>
      
      {/* image */}
      <Image 
        style={styles.image} 
        source={ require('../../../assets/images/wallpaper2.jpg') }/>

      {/* bed & bedroom */}
      <Text style={styles.bedrooms}>1 bed - 1 bedroom</Text>

      {/* Type & descr.*/}
      <Text style={styles.description} numberOfLines={2}>Lorem ipsum
      Lorem ipsum Lorem ipsumLorem ipsum</Text>

      {/* old price & new price*/}
      <Text style={styles.prices}> 
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30 </Text>
        / night
      </Text>

      {/* Total price*/}
      <Text style={styles.totalPrice}>$180 totall</Text>

    </View>
  );
};

export default Post;
