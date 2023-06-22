import React from 'react';
import { View } from 'react-native';
import { editProfileInfoContainer as styles } from '../css';
const EditProfileInfoContainer = ({children}) => (
  <View style={styles.editProfileInfoContainer}>
      {children}
  </View>
)

export default EditProfileInfoContainer;