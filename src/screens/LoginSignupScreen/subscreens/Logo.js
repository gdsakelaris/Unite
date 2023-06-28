import React from 'react';
import { Image} from 'react-native';
import UniteLogo from '../../../images/Unite_Logo.png'
import AvatarIcon from '../../../components/AvatarIcon'
import { logo as styles } from '../css';
const Logo = () => (
  <AvatarIcon avatarSettings={{source: Image.resolveAssetSource(UniteLogo).uri, size: 180, style:styles.logo}}/>
)
export default Logo;