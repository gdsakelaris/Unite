/**
 * Render a container component that wraps around all the content of the PublishedServiceContainer screen
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 */

import React from 'react';
import { SafeAreaView} from 'react-native';
import { publishedServiceContainer as styles } from '../css';
const PublishedServiceContainer = ({children}) => (
  <SafeAreaView style={styles.publishedServiceContainer}>
    {children}
  </SafeAreaView>
)
export default PublishedServiceContainer;