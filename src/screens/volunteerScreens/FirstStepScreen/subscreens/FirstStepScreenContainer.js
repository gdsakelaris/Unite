/**
 * @file FirstStepScreenContainer.js
 * @description This file defines a container component that stores all the content of FirstStep screen.
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @returns {JSX.Element} A container component for the FirstStep screen.
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { firstStepScreenContainer as styles } from '../css';
const FirstStepScreenContainer = ({children}) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
)
export default FirstStepScreenContainer;