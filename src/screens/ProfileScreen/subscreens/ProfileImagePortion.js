import React from 'react';
import { View} from 'react-native';
import { imageContainer as styles } from '../css';
const ProfileImagePortion = ({children}) => (
  <View style={styles.imgContainer}>
    {children}
  </View>
)
export default ProfileImagePortion;