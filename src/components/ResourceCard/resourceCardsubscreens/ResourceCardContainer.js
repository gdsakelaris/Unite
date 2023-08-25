/**
 * A container component that wraps around all components that build up resource card.
 *
 * @function
 * @param {React.ReactNode} children - The components to be wrapped within the container.
 * @returns {JSX.Element} - A container that wraps around all components that build up resource card.
 */

import React from 'react';
import { View} from 'react-native';
import { resourceCard as styles } from '../../css';

const ResourceCardContainer = ({children}) => (
  <View style={styles.resourceCardContainer}>
      {children}
  </View>)
export default ResourceCardContainer;