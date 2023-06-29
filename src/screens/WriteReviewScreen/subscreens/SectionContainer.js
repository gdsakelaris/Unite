import React from 'react';
import { View } from 'react-native';
import { sectionContainer as styles } from '../css';
const SectionContainer = ({children}) => (
  <View style={styles.sectionContainer}>
    {children}
  </View>
)
export default SectionContainer;