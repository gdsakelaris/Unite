import React from 'react';
import { View, TouchableOpacity,  } from 'react-native';
import { editPenIcon } from '../icons';
import { editProfileBtn as styles } from '../css';
const EditProfileBtn = () => (
  <TouchableOpacity onPress={()=> console.log('Pressed')} >
    <View style={styles.editProfilePictureButtonView}>
      {editPenIcon}
    </View>
  </TouchableOpacity>
)
export default EditProfileBtn;