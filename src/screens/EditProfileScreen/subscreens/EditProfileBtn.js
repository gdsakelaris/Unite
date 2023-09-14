/**
 * Edit Profile Button component.
 * This component displays an edit button that is positioned at the bottom right
 * of the user's profile picture. It uses the AvatarIcon component with custom settings.
 *
 * @component
 * @returns {JSX.Element} EditProfileBtn component
 */

import React from 'react';
import {TouchableOpacity,  } from 'react-native';
import { editBtnSettings } from '../profileUrl'; //import the an object that contains all the necessary props for making the AvartarIcon
import { editProfileBtn as styles } from '../css';
import AvatarIcon from '../../../components/AvatarIcon'; //Checkout Avarta.Icon component in react native paper for reference
const EditProfileBtn = () => (
  <TouchableOpacity style={styles.editProfilePictureButtonView}>
    <AvatarIcon avatarSettings={editBtnSettings}/>
  </TouchableOpacity>
)
export default EditProfileBtn;