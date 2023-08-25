/**
 * @file ProfileImage.js
 * @description This file defines a component that displays the user's avatar and an edit button on the profile screen.
 * @param {Object} navigation - The navigation object used for navigating to the edit profile screen.
 * @returns {JSX.Element} A component displaying the user's avatar and an edit button.
 */

import React from 'react';
import { Button } from 'react-native-paper';
import ProfileImagePortion from './ProfileImagePortion';
import AvatarIcon from '../../../components/AvatarIcon';
import { editBtn as styles } from '../css';
import img from '../../../images/Reslogo.png'
import { Image } from 'react-native'


//settings for user avatar
const profileUrl = Image.resolveAssetSource(img).uri //mockup picture for avatar
// object that contains all props to make the Avatar component from react native paper
const avatarSettings = {
  source : profileUrl, 
  size: 150 
}
const ProfileImage = ({navigation}) => (
  <ProfileImagePortion>
    {/* User avatar. Checkout Avatar from react native paper for reference*/}
    <AvatarIcon avatarSettings={avatarSettings}/>

    {/* Edit profile button */}
    <Button mode='elevated' labelStyle={styles.editButtonTxt} style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
        edit profile
    </Button>

  </ProfileImagePortion>
)
export default ProfileImage;