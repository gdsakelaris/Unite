// a container that stores all the location option for the provided resource
import React from 'react';
import { View } from 'react-native';
import { location as styles } from '../../css';

const LocationContentContainer = ({children}) => (
  <View style={styles.contentContainer}>
    {children}
  </View>
)

export default LocationContentContainer;