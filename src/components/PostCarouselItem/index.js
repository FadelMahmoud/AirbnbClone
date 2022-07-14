/* eslint-disable prettier/prettier */
import {Text, View, Image, useWindowDimensions, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const PostCarouselItem = (props) => {

  const width = useWindowDimensions().width;
  const post = props.post;

  const navigation = useNavigation();

  const goToDetailedPostScreen = () => {
    navigation.navigate( 'DetailedPost', {postId : post.id} );
  }

  return (
    <Pressable
      onPress={goToDetailedPostScreen} 
      style={styles.OuterContainer , { width: width - 80}}>

      <View style={styles.innerContainer}> 
        {/* image */}
        <Image
          style={styles.image}
          source={ { uri : post.image } } />

        <View style={styles.textContainer}>
          <Text style={styles.bedrooms}>{post.bed} bed - {post.bedroom} bedroom</Text>

          {/* Type & description.*/}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/* old price & new price*/}
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>${post.newPrice} </Text>
            / night
          </Text>
        </View>

      </View>

    </Pressable>
  );
};

export default PostCarouselItem;
