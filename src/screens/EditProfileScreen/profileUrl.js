//Props for making User Profile picture and edit btn
import img from '../../images/Reslogo.png'
import { Image } from 'react-native'
import { colors } from '../../base'

// Resolve the image asset source to get the profile picture URL
const profileUrl = Image.resolveAssetSource(img).uri

/**
 * Settings for user profile avatar.
 * This object contains props of Avarta component to make the user profile avatar. Checkout Avarta component in react native paper for reference
 *
 * @typedef {Object} AvatarSettings
 * @property {string} source - The URL of the user's profile picture.
 * @property {number} size - The size of the avatar.
 */
export const avatarSettings = {
  source : profileUrl, 
  size: 150
}

/**
 * Settings for the pencil icon.
 * This object contains props of Avartar.Icon component to make the the pencil icon and display it on the user's profile picture.
 * Need to have this object because the component that render pencile icon is not from expo icon but from Avartar.Icon from react native paper. Checkout Avarta.Icon component in react native paper for reference
 * @typedef {Object} EditButtonSettings
 * @property {string} icon - The name of the icon to display in the edit button.
 * @property {number} size - The size of the icon.
 * @property {string} color - The color of the icon.
 * @property {Object} style - Additional styles for the edit button container.
 */
export const editBtnSettings = {
  icon: 'pencil',
  size: 30,
  color: colors.white,  
  style: {
    backgroundColor:colors.gold,
  }
}