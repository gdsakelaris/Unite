import img from '../../images/Reslogo.png'
import { Image } from 'react-native'
const profileUrl = Image.resolveAssetSource(img).uri
export const avatarSettings = {
  source : profileUrl, 
  size: 150 
}