import React from 'react';
import {Avatar} from 'react-native-paper';

const getAvartaType = (type) => {
  if (type.icon) return <Avatar.Icon {...type}/>
  else if (type.source) {
    const {source, ...remainingSettings} = type
    return <Avatar.Image source={{uri: source}} {...remainingSettings} />}
  else return <Avatar.Text {...type}/>

}

function AvatarIcon({avatarSettings}) {
  return (
    getAvartaType(avatarSettings)
    
  );
}

export default AvatarIcon;