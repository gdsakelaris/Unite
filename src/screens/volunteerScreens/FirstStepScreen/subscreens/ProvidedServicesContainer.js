/**
 * @file ProvidedServicesContainer.js
 * @description This file defines a container component that wraps around all the service card components.
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @returns {JSX.Element} A container component wrapping around service card components.
 */

import React from 'react';
import { View} from 'react-native';
import { cardContainer as styles } from '../css';

const ProvidedServicesContainer = ({children}) => (
  <View style={styles.providedServicesContainer}>
    {children}
  </View>
)
export default ProvidedServicesContainer;