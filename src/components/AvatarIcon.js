/**
 * A component that renders an avatar icon based on the provided avatar settings.
 *
 * @function
 * @param {Object} avatarSettings - The settings for rendering the avatar icon. An object that contains all the props of the Avatar react-native-paper component. Go to react native paper and checkout Avatar component for all the props
 * @returns {JSX.Element} - The rendered avatar icon.
 */

import React from 'react';
import renderAvatar from '../utils/renderAvatar';
function AvatarIcon({avatarSettings}) {
  return (
    renderAvatar(avatarSettings)
    
  );
}
export default AvatarIcon;