/**
 * Render a container component that wraps around all the content of the GetStarted screen
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 */
import React from 'react';
import { View } from 'react-native';
import { getStartedContainer as styles } from '../css';
const GetStartedContainer = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)
export default GetStartedContainer;