//this file will render a title for the Describe Service page
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { title as styles } from '../css';
const Title = () => (
  <View style={styles.titleContainer} >
    <Text style={styles.titleStyle}>Describe your</Text>
    <Text style={styles.titleStyle}>Service</Text>
  </View>
  
)
export default Title;