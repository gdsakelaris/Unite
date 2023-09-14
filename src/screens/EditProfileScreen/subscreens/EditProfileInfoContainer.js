/**
 * Edit Profile Info Container component.
 * This component serves as a container that wraps around all the profile info fields
 * on the Edit Profile screen. 
 * @component
 * @param {React.ReactNode} children - The profile info fields and related content to be wrapped by the container.
 * @returns {JSX.Element} EditProfileInfoContainer component
 */

import React from 'react';
import { View } from 'react-native';
import { editProfileInfoContainer as styles } from '../css';
const EditProfileInfoContainer = ({children}) => (
  <View style={styles.editProfileInfoContainer}>
      {children}
  </View>
)

export default EditProfileInfoContainer;