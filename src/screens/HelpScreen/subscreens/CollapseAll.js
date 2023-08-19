/**
 * @file collapseAll.js
 * @description This file contains a clickable text component that displays the 'Collapse All' message.
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { collapseAllText as styles } from '../../LoginSignupScreen/css';

const CollapseAll = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
      <Text style={styles.collapseAllText}>Collapse All   </Text>
  </TouchableOpacity>
);

export default CollapseAll;