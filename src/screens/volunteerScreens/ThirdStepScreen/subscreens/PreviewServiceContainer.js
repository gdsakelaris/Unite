/**
 * Render a container component that wraps around all the content of the Third Step screen
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 */

import React from 'react';
import { View} from 'react-native';
import { previewServiceContainer as styles } from '../css';
const PreviewServiceContainer = ({children}) => (
  <View style={styles.previewServiceContainer}>
    {children}
  </View>
)
export default PreviewServiceContainer;