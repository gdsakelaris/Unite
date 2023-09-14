/**
 * A component that wraps around all the content of a resource card, including location, title, contact info, etc.
 *
 * @function
 * @param {React.ReactNode} children - The content to be wrapped within the component.
 * @returns {JSX.Element} - A component that wraps around the resource card content.
 */

import React from 'react';
import { View} from 'react-native';
import { resourceCard as styles } from '../../css';
const ResourceCardContent = ({children}) => (
  <View style={styles.resourceCardContent}>
    {children}
  </View>
)
export default ResourceCardContent;