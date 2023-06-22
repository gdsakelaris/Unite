import React from 'react';
import { View } from 'react-native';
import { editProfileContainer as styles } from '../css';
const EditProfileContainer = ({children}) => (
  <View style={styles.editProfileContainer}>
    {children}
  </View>
)
export default EditProfileContainer;