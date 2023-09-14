/**
 * @file renderCountryImage.js
 * @description This file contains a function that creates an Avatar component to display a country image on a language card.
 */

import AvatarIcon from '../../../components/AvatarIcon';

/**
 * @file renderCountryImage.js
 * @description This file contains a function that creates an Avatar component to display a country image on a language card. Checkout Avatar component from react native paper for references
 */
export default renderCountryImage = (picture) => {
  //setting for the returned avatar (size)
  const avatarSettings = {
    source: picture ? picture : "https://placehold.co/400?text=No+image+available",
    size: 50
  }
  return <AvatarIcon avatarSettings={avatarSettings}/>
}