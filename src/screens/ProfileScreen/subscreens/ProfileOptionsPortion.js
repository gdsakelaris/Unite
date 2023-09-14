/**
 * @file ProfileOptionsPortion.js
 * @description This file defines the lower part of the profile screen, which includes a collection of profile option cards. These cards allow the user to perform various actions on the profile screen, such as navigating to bookmarked services, settings, or logging out.
 * @param {ReactNode} children - The content to be displayed inside the profile options portion.
 * @returns {JSX.Element} A component representing the lower part of the profile screen with profile option cards.
 */

import React from 'react';
import { View } from 'react-native';
import { profileOptionsContainer as styles } from '../css';
const ProfileOptionsPortion = ({children}) => (
  <View style={styles.profileOptContainer}>
    {children}
  </View>
)
export default ProfileOptionsPortion;