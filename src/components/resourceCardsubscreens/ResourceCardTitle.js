//make a title portion in resource card
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { resourceCard as styles } from '../css';
const ResourceCardTitle = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
      <Text style={styles.resourceCardTitle}>{title}</Text>
  </TouchableOpacity>
)
export default ResourceCardTitle;