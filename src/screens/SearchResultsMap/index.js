/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useState} from 'react';

import MapView from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View>
      <MapView
        style={{ width: '100%' , height: '100%'}}
        initialRegion={{
            latitude: 28.3279822,
            longitude: -16.5124847,
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
    </View>
  );
};

export default SearchResultsMap;
