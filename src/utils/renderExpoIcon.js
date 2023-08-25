/**
 * Renders expo icon.
 *
 * @function renderExpoIcon 
 * @param {string} expoType - the type of expo icon
 * @param {string} iconName - name of icon
 * @param {Object} iconProps - an object that contains all the props of expo icon
 * @returns {JSX.Element} - Expo icon component.
 */

import * as ExpoIcon from "@expo/vector-icons";
export default renderExpoIcon = (expoType, iconName, iconProps) => {
  //check if the provided expo type is valid 
  if (!ExpoIcon[expoType]) { 
    //return null
    console.log('Invalid expo type')
    return null
  } else { //if expo type is valid, then return the expo icon
    const Icon = ExpoIcon[expoType]
    return <Icon name={iconName} {...iconProps} />
  }
}