/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View , FlatList, useWindowDimensions} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

import MapView from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';


const SearchResultsMap = (props) => {

  const {posts} = props;

  const width = useWindowDimensions().width;

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatlist = useRef();
  const viewConfig = useRef( { itemVisiblePercentThreshold: 70} );
  const onViewChanged = useRef( ({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  const map = useRef();

  useEffect( ()  => {

    if ( !selectedPlaceId || !flatlist ) { return; }

    const index = posts.findIndex( place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta : 0.8,
      longitudeDelta : 0.8,
    };
    /*
    console.log("map.current.region :" + map.current.region);
    console.log("region :" + region);
    */

    if ( map.current.region !== region )
      {map.current.animateToRegion(region);}

  }, [selectedPlaceId]);


  return (
    <View>
      <MapView
        ref={map}
        style={{ width: '100%' , height: '100%'}}
        initialRegion={{
            latitude: 28.3915637,
            longitude: -16.6291304,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
         }}
      >
        {posts.map( place => (
          <CustomMarker
            coordinate={{ latitude: place.latitude , longitude: place.longitude} }
            price={place.newPrice}
            isSelected={ place.id === selectedPlaceId}
            onPress={ () => setSelectedPlaceId(place.id) }
          />)
        )}

      </MapView>

      <View style={{ position: 'absolute' , bottom: 10}}>

      <FlatList
        ref={flatlist}
        data={posts}
        renderItem={ ({item}) => <PostCarouselItem post={item} /> }
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 80}
        snapToAlignment={'center'}
        decelerationRate={'normal'}
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={onViewChanged.current}
        />

      </View>
    </View>
  );
};

export default SearchResultsMap;
