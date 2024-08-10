import React from 'react';
import { Marker } from 'react-native-maps';
import { Location } from '../data/locations';

type MapMarkerProps = {
  location: Location;
  isSelected: boolean;
  onPress: (id: number) => void;
};

const MapMarker = ({ location, isSelected, onPress }: MapMarkerProps) => {
  return (
    <Marker
      coordinate={{ latitude: location.latitude, longitude: location.longitude }}
      onPress={() => onPress(location.id)}
      pinColor={isSelected ? 'blue' : 'red'}
    />
  );
};

export default MapMarker;