import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { loginBtn as styles } from '../css';
import { handleSignUp } from '../createNewAccount';
const SignupBtn = ({email, password, confirmPassword}) => (
  <TouchableOpacity style={styles.button} onPress={() => handleSignUp(email, password, confirmPassword)}>
    <Text style={styles.buttonText}>Sign up</Text>
  </TouchableOpacity>
)
export default SignupBtn;