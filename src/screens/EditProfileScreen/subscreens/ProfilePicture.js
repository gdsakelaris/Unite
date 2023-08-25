/**
 * Profile Picture component.
 * This component displays the user's profile picture and an edit button on the Edit Profile screen.
 *
 * @component
 * @returns {JSX.Element} ProfilePicture component
 */

import React from 'react';
import AvatarIcon from '../../../components/AvatarIcon' //Checkout Avarta component in react native paper for reference
import { avatarSettings } from '../profileUrl'; //import the an object that contains all the necessary props for making the Avartar component
import { View } from 'react-native';
import EditProfileBtn from './EditProfileBtn';
import { editProfile as styles } from '../css';
const ProfilePicture = () => (
  <View style={styles.editProfilePictureContainer}>
    {/* Ultilized Avartar component from react native paper to make a placeholder for user's picture */}
    <AvatarIcon avatarSettings={avatarSettings}/>
    <EditProfileBtn/>
  </View>
  
)
export default ProfilePicture;