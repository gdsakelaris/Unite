import React from 'react';
import { View, Image} from 'react-native';
import UniteLogo from '../../../images/Unite_Logo.png'
import { logo as styles } from '../css';
const Logo = ({image}) => (
  <View style={styles.logocontainer}>
        <Image source={image ? image : UniteLogo} style={styles.logo} />
  </View>
)
export default Logo;