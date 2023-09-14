/**
 * ProvidedServicesContainer component.
 * This component is a container that wraps around the provided services on the HomeScreen.
 *
 * @component
 * @param {JSX.Element[]} children - The child components that are rendered within the container.
 * @returns {JSX.Element} ProvidedServicesContainer component
 */


import React from 'react'; 
import {View} from 'react-native';
import { providedServicesContainer as styles} from '../css';

const ProvidedServicesContainer = ({children}) => (
  <View style={styles.servicesContainer}>
      {children}
  </View>  
)

export default ProvidedServicesContainer;