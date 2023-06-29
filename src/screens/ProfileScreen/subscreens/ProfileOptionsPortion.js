import React from 'react';
import { View } from 'react-native';
import { profileOptionsContainer as styles } from '../css';
const ProfileOptionsPortion = ({children}) => (
  <View style={styles.profileOptContainer}>
    {children}
  </View>
)
export default ProfileOptionsPortion;