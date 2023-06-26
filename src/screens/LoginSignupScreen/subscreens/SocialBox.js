import React from 'react';
import { View } from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { socialBox as styles } from '../css';
const SocialBox = () => (
  <View style={styles.socialBox}>
    <View style={styles.circle}>
      <AntDesign name="google" size={30} color="black" />
    </View>
    <View style={styles.circle}>
      <FontAwesome name="facebook-f" size={30} color="black" />
    </View>
    <View style={styles.circle}>
      <AntDesign name="twitter" size={30} color="black" />
    </View>
  </View>
)
export default SocialBox;