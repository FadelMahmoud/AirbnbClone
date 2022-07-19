/* eslint-disable prettier/prettier */
import {FlatList, View, Text} from 'react-native';
import React from 'react';

import Post from '../../components/Post';


const SearchResultsScreen = (props) => {

  const {posts} = props;

  console.log("posts" + posts);
  console.log("posts.length" + posts.length);
  
  return (
    <View style={{height: '100%', width: '100%' , alignItems:'center' , justifyContent:'center'}}>
      
      {posts.length == 0 &&
        <Text style={{fontSize:25 , alignItems:'center' , justifyContent:'center'}}>No accommodations for selected location</Text>
      }

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
