/**
 * @file PickLanguageContainer.js
 * @description This file contains a container component that wraps around all the content of the pick language screen.
 */


import React from 'react';
import { SafeAreaView} from 'react-native';
import {pickLanguageContainerStyle as styles} from '../css'

/**
 * Container component that wraps around all the content of the pick language screen.
 *
 * @component
 * @param {ReactNode} children - The child components to be wrapped by the container.
 * @returns {JSX.Element} - A JSX element representing the PickLanguageContainer component.
 */
const PickLanguageContainer = ({children}) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
)
export default PickLanguageContainer;