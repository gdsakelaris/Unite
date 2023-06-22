import React from 'react';
import {TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';
import ProfileImagePortion from './ProfileImagePortion';
import AvatarIcon from '../../../components/AvatarIcon';
import { goToEditPage } from '../funtions';
import { editBtn as styles } from '../css';
import { avatarSettings } from '../profileUrl';
const ProfileImage = ({navigation}) => (
  <ProfileImagePortion>
    <AvatarIcon avatarSettings={avatarSettings}/>
    <TouchableOpacity style={styles.editButton} onPress={() => goToEditPage(navigation)}>
        <Text style={styles.editButtonTxt}> edit profile </Text>
    </TouchableOpacity>
  </ProfileImagePortion>
)
export default ProfileImage;