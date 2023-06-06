import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const MapScreen = () => {
  const [location, setLocation] = useState({
    latitude: 37.325310,
    longitude: -121.836330,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  })
  const changeLocation = (region) => setLocation(region)
  return (
    <View style={styles.container}>
        <MapView style={styles.map}
                mapType='standard'
                provider='google'
                initialRegion={location}
                onRegionChange={(region) => changeLocation(region)}>
              <Marker
                coordinate={location}
              >
                <Ionicons name="location-outline" size={44} color="#C90606" />   
              </Marker>
              
        </MapView>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  }
})

export default MapScreen;