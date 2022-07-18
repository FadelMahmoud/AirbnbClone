/* eslint-disable prettier/prettier */
import {FlatList,Text, View} from 'react-native';
import React , {useEffect, useState} from 'react';

import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

import { API, graphqlOperation } from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const SearchResultsScreen = (props) => {

  const {guests} = props;

  const [posts, setPosts] = useState( [] );

  useEffect( () => {

    const fetchPosts = async () => {
      try {

        const postsResult = await API.graphql(
          graphqlOperation(listPosts , 
            { filter: {
                maxGuests: {
                  ge: guests
                }
              }
            })
        );

        // console.log(postsResult);
        setPosts(postsResult.data.listPosts.items);

      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
  }, []);


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
