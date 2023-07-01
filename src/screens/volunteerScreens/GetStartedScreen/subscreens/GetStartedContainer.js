import React from 'react';
import { View } from 'react-native';
import { getStartedContainer as styles } from '../css';
const GetStartedContainer = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)
export default GetStartedContainer;