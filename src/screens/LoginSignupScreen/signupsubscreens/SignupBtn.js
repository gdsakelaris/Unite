//this file will make a sign up btn for sign up screen
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { loginBtn as styles } from '../css';
import signUpNewAccount from '../../../utils/signUpNewAccount';
const SignupBtn = ({email, password, confirmPassword}) => (
  <TouchableOpacity style={styles.button} onPress={() => signUpNewAccount(email, password, confirmPassword)}>
    <Text style={styles.buttonText}>Sign up</Text>
  </TouchableOpacity>
)
export default SignupBtn;