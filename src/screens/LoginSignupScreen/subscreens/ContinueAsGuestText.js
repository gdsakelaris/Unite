//this file will make a clickable text component that displays the 'Continue as guest' msg at the bottom of both the login and sign up screens
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { guestText as styles } from '../css';
const ContinueAsGuestText = () => (
  <TouchableOpacity>
      <Text style={styles.guestText}>Continue as guest</Text>
  </TouchableOpacity>
)
export default ContinueAsGuestText;