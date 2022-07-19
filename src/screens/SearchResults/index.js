/* eslint-disable prettier/prettier */
import {FlatList, View} from 'react-native';
import React from 'react';

import Post from '../../components/Post';


const SearchResultsScreen = (props) => {

  const {posts} = props;

  console.log("posts" + posts);
  
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) =>
          <Post post={item} />
        }
      />
    </View>
  );
};

export default SearchResultsScreen;
