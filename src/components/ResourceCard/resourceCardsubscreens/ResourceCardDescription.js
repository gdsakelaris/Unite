/**
 * A component that displays the description of a resource card.
 *
 * @function
 * @param {string} description - The description to be displayed.
 * @returns {JSX.Element} - A component that displays the description of the resource card.
 */

import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import { resourceCard as styles } from '../../css';
const ResourceCardDescription = ({description}) => (
  <View style={styles.resourceCardDescriptionContainer}>
        <Text style={styles.resourceCardDescription}>{description}</Text>
  </View>
)
export default ResourceCardDescription;