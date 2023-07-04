//This file will render a forgot password text that is displayed under the text input for password
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { forgotPass as styles } from '../css';
import { Text } from 'react-native-paper';

const ForgotPasswordText = () => (
  <TouchableOpacity>
      <Text style={styles.forgotPass}>Forgot Password?</Text>
  </TouchableOpacity>
)
export default ForgotPasswordText;