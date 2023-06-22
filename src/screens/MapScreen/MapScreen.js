import React, { useState } from 'react';
import { View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { markerIcon } from './icons';
import {map as styles} from './css'
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
                {markerIcon} 
              </Marker>       
        </MapView>
    </View>
  )
}
export default MapScreen;