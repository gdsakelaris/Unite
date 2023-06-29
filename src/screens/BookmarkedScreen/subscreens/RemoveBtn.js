import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { removeBtn as styles } from '../css';
const RemoveBtn = () => (
  <TouchableOpacity style={styles.removeButton}>
      <Text style={styles.removeButtonText}>Remove</Text>
  </TouchableOpacity>
)
export default RemoveBtn;