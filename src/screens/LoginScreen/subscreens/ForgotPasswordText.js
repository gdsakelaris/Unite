import React from 'react';
import { TouchableOpacity } from 'react-native';
import { forgotPass as styles } from '../css';

const ForgotPasswordText = () => (
  <TouchableOpacity>
      <Text style={styles.forgotPass}>Forgot Password?</Text>
  </TouchableOpacity>
)
export default ForgotPasswordText;