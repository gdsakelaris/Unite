/**
 * @file ConfirmPublishedScreenContainer.js
 * @description This file defines a container component that store all the contents of the ConfirmPublishedResource screen.
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @returns {JSX.Element} A container component for the Published screen.
 */

import React from 'react';
import { View } from 'react-native';
import { confirmPublishedContainer as styles } from '../css';
const ConfirmPublishedScreenContainer = ({children}) => (
  <View style={styles.confirmPublishedContainer}>
    {children}
  </View>
)
export default ConfirmPublishedScreenContainer;