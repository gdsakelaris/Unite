/**
 * Edit Profile Container component.
 * This component serves as a container that wraps around all the content of the
 * edit profile screen.
 *
 * @component
 * @param {React.ReactNode} children - The content to be wrapped by the container.
 * @returns {JSX.Element} EditProfileContainer component
 */

import React from 'react';
import { View } from 'react-native';
import { editProfileContainer as styles } from '../css';
const EditProfileContainer = ({children}) => (
  <View style={styles.editProfileContainer}>
    {children}
  </View>
)
export default EditProfileContainer;