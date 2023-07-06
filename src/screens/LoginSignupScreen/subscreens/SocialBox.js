//this file will make a view component where it contains all the alternative options for logging in and signing up that the user can use if they don't want to create an account
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import GoogleIcon from '../../../images/googleIcon.png'
import FaceBookIcon from '../../../images/facebookIcon.png'
import TwitterIcon from '../../../images/twitterIcon.png'
import AvatarIcon from '../../../components/AvatarIcon';
import { socialBox, socialBox as styles } from '../css';
const SocialBox = () => (
  <View style={styles.socialBox}>
    {/* Login/Signup through Google */}
    <TouchableOpacity>
        <AvatarIcon avatarSettings={{source: Image.resolveAssetSource(GoogleIcon).uri, size: 50, style:socialBox.socialIcon}}/>
    </TouchableOpacity>
    {/* Login/Signup through Facebook */}
    <TouchableOpacity>
        <AvatarIcon avatarSettings={{source: Image.resolveAssetSource(FaceBookIcon).uri, size: 50, style: socialBox.socialIcon}}/>
    </TouchableOpacity>
    {/* Login/Signup through Twitter */}
    <TouchableOpacity>
        <AvatarIcon avatarSettings={{source: Image.resolveAssetSource(TwitterIcon).uri, size: 50, style: socialBox.socialIcon}}/>
    </TouchableOpacity>
  </View>
)
export default SocialBox;