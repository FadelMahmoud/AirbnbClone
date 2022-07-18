/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import places from '../../../assets/data/feed';

const DetailedPost = () => {

  const route = useRoute();
  const post = places.find( place => place.id === route.params.postId);
  
  return (
    <View>
      <Text>DetailedPost</Text>
      <Text>post.title</Text>
    </View>
  );
};

export default DetailedPost;
