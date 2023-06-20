import * as React from 'react';
import { Avatar } from 'react-native-paper';

const Avatar = ({icon, image, text }) => {
  return (
    icon ? <Avatar.Icon {...icon}/> : 
          (image ? <Avatar.Image {...image}/> : <Avatar.Text {...text}/>)
  );
}

export default Avatar;