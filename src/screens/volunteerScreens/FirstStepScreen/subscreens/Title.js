import React from 'react';
import { Text } from 'react-native-paper';
import { title as styles } from '../css';
const Title = ({title}) => (
  <Text style={styles.title}>{title}</Text>
)
export default Title;