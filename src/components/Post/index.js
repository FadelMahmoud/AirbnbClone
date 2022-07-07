/* eslint-disable prettier/prettier */
import {Text, View, Image} from 'react-native';
import React from 'react';

import styles from './styles.js';

const Post = (props) => {

    const post = props.post;

  return (
    <View style={styles.container}>

      {/* image */}
      <Image
        style={styles.image}
        source={ { uri : post.image } } />

      {/* bed & bedroom */}
      <Text style={styles.bedrooms}>{post.bed} bed - {post.bedroom} bedroom</Text>

      {/* Type & description.*/}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/* old price & new price*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>
        / night
      </Text>

      {/* Total price*/}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

    </View>
  );
};

export default Post;
