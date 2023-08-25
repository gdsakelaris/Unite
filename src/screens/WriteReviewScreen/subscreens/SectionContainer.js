/**
 * @file SectionContainer.js
 * @description This file defines a container component that stores all the content of a single section such as add image, write review, etc on the Write Review screen .
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @returns {JSX.Element} The SectionContainer component.
 */


import React from 'react';
import { View } from 'react-native';
import { sectionContainer as styles } from '../css';
const SectionContainer = ({children}) => (
  <View style={styles.sectionContainer}>
    {children}
  </View>
)
export default SectionContainer;