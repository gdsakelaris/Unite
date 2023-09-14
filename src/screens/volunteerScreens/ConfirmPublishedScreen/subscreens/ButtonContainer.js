/**
 * @file ButtonContainer.js
 * @description This file defines a container component used to store two buttons on the Published screen.
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @returns {JSX.Element} A container component for buttons on the Published screen.
 */


import React from 'react';
import { View } from 'react-native';
import { button as styles } from '../css';
const ButtonContainer = ({children}) => (
  <View style={styles.buttonContainer}>
    {children}
  </View>
)
export default ButtonContainer;