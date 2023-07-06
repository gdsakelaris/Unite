//this file will make a text component that displays the 'Or text' msg on both the sign up and login screen 
import React from 'react';
import { Text } from 'react-native-paper';
import { orText as styles } from '../css';
const OrText = () => (
  <Text style={styles.orText}> OR </Text>
)
export default OrText;