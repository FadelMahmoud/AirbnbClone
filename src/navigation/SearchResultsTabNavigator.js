/* eslint-disable prettier/prettier */
import React, {useEffect , useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { useRoute } from '@react-navigation/native';

import { API, graphqlOperation } from 'aws-amplify';
import {listPosts} from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();


const SearchResultsTabNavigator = () => {

  const route = useRoute();

  const {guests , viewport} = route.params;

  console.log("guests" + guests);
  // console.log("route.params.viewport" + route.params.viewport);
  console.log("viewport" + viewport);

  const [posts, setPosts] = useState( [] );

  useEffect( () => {

    const fetchPosts = async () => {
      try {

        const postsResult = await API.graphql(
          graphqlOperation(listPosts ,
            { filter: {
                and: {
                  maxGuests: {
                    ge: guests,
                  },
                  latitude :{
                    between : [viewport.southwest.lat , viewport.northeast.lat],
                  },
                  longitude :{
                    between : [viewport.southwest.lng , viewport.northeast.lng],
                  },
                }
              }
            })
        );

        console.log("postsResult" + postsResult);
        setPosts(postsResult.data.listPosts.items);

      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Tab.Navigator
        screenOptions={() => ({
            tabBarActiveTintColor: '#f15454',
            tabBarInactiveTintColor: 'gray',
            tabBarIndicatorStyle: {
                backgroundColor: '#f15454',
            }
      })}
    >
      <Tab.Screen name={"List"} > 
        { () => (
          <SearchResultScreen posts={posts} />
        )}
      </Tab.Screen>

      <Tab.Screen name={"Map"} >
        { () => (
          <SearchResultsMap posts={posts} />
        )}
      </Tab.Screen>

    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
