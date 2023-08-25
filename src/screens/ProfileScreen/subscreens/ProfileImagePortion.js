/**
 * @file ProfileImagePortion.js
 * @description This file defines a component that wraps around the upper part of the profile screen, including the user's avatar and the edit button.
 * @param {Object} props - The props that are passed to the component.
 * @returns {JSX.Element} A component wrapping the upper part of the profile screen.
 */

import React from 'react';
import { View} from 'react-native';
import { imageContainer as styles } from '../css';
const ProfileImagePortion = ({children}) => (
  <View style={styles.imgContainer}>
    {children}
  </View>
)
export default ProfileImagePortion;