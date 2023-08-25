/**
 * @file ProfileContainer.js
 * @description This file defines a container component that wraps around all the content of the profile screen.
 * @param {React.ReactNode} children - The child components that will be wrapped by the container.
 * @returns {JSX.Element} A container wrapping the provided child components.
 */

import React from 'react';
import { View } from 'react-native';
import { profileContainer as styles } from '../css';
const ProfileContainer = ({children}) => (
  <View style={styles.profileContainer}>
    {children}
  </View>
)
export default ProfileContainer;