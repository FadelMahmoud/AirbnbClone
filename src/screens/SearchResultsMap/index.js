/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useState} from 'react';

import MapView from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View>
      <MapView
        style={{ width: '100%' , height: '100%'}}
        initialRegion={{
            latitude: 28.3915637,
            longitude: -16.6291304,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
         }}
      >
        {places.map( place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={ place.id === selectedPlaceId}
            onPress={ () => setSelectedPlaceId(place.id) }
          />)
        )}

      </MapView>

      <View style={{ position: 'absolute' , bottom: 10}}>
        <PostCarouselItem post={places[0]} />
      </View>
    </View>
  );
};

export default SearchResultsMap;
