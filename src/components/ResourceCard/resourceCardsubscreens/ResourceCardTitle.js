/**
 * A component that displays the title of a resource in a resource card and navigates to the full service page when clicked.
 *
 * @function
 * @param {string} title - The title of the resource.
 * @param {function} onPress - The function to be executed when the title is clicked.
 * @returns {JSX.Element} - A component that displays the title of a resource in a resource card.
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { resourceCard as styles } from '../../css';
const ResourceCardTitle = ({title, onPress}) => (
  
  //When the title is clicked, the user will be navigated to the full service page
  <TouchableOpacity onPress={onPress}>
      <Text style={styles.resourceCardTitle}>{title}</Text>
  </TouchableOpacity>
)
export default ResourceCardTitle;