import { useState } from 'react';
import { View, StyleSheet, Alert, Vibration } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { predefinedLocations, Location } from '../data/locations'; 
import MapMarker from '../components/MapMarker';
import ConfirmButton from '../components/ConfirmButton';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Map'>;

const MapScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  const handleMarkerPress = (id: number) => {
    setSelectedMarker(id);
  };

  const handleConfirmLocation = () => {
    if (selectedMarker !== null) {
      const location: Location | undefined = predefinedLocations.find((loc: Location) => loc.id === selectedMarker);
      if (location) {
        navigation.navigate('Details', { location: { latitude: location.latitude, longitude: location.longitude } });
      } else {
        Vibration.vibrate();  
        Alert.alert('Error', 'Selected location not found.');
      }
    } else {
      Vibration.vibrate(); 
      Alert.alert('No Selection', 'Please select a location before confirming.');
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        accessibilityLabel="Map View"
        accessibilityHint="Shows a map with selectable markers"
      >
        {predefinedLocations.map((location) => (
          <MapMarker
            key={location.id}
            location={location}
            isSelected={selectedMarker === location.id}
            onPress={handleMarkerPress}
          />
        ))}
      </MapView>
      <ConfirmButton onPress={handleConfirmLocation} disabled={selectedMarker === null} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
