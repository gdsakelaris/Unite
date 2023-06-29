import React from 'react';
import { View } from 'react-native';
import { profileContainer as styles } from '../css';
const ProfileContainer = ({children}) => (
  <View style={styles.profileContainer}>
    {children}
  </View>
)
export default ProfileContainer;