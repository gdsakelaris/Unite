import React from 'react';
import { getAvartaType } from './functions';
//avatarSetting is an object of props in Avatar react-native-paper
function AvatarIcon({avatarSettings}) {
  return (
    getAvartaType(avatarSettings)
    
  );
}
export default AvatarIcon;