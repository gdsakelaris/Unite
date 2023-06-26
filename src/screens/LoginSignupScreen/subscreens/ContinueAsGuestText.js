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