import React from 'react';
import AvatarIcon from '../../../components/AvatarIcon'
import { avatarSettings } from '../profileUrl';
import { View } from 'react-native';
import EditProfileBtn from './EditProfileBtn';
import { editProfile as styles } from '../css';
const ProfilePicture = () => (
  <View style={styles.editProfilePictureContainer}>
    <AvatarIcon avatarSettings={avatarSettings}/>
    <EditProfileBtn/>
  </View>
  
)
export default ProfilePicture;