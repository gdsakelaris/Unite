import React from 'react';
import { Text } from 'react-native-paper';
import { hour as styles } from '../../css';
const CustomHeaderForDropDown = ({headerTitle}) => (
  <Text variant='headlineMedium' style={styles.customHeaderForDropDown}>{headerTitle}</Text>
)
export default CustomHeaderForDropDown;