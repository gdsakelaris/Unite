import React, { useState } from 'react';
import { View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { markerIcon } from './icons';
import {map as styles} from './css'
const MapScreen = () => {
  //mockup location, this variable will be set to the location of user later
  const [location, setLocation] = useState({
    latitude: 37.325310,
    longitude: -121.836330,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  })
  //as we move the marker icon to a new location on the map, the location variable will be set to a new value 
  const changeLocation = (region) => setLocation(region)
  return (
    <View style={styles.container}>
        <MapView style={styles.map}
                mapType='standard' //standard view
                provider='google' //use google map
                initialRegion={location} //initial location that appears on the map when it is first rendered
                onRegionChange={(region) => changeLocation(region)}> 
              {/* marker */}
              <Marker
                // location of marker
                coordinate={location}
              >
                {markerIcon} 
              </Marker>       
        </MapView>
    </View>
  )
}
export default MapScreen;