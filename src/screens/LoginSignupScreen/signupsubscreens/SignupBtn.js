//this file will make a sign up btn for sign up screen
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { loginBtn as styles } from '../css';
import signUpNewAccount from '../../../utils/signUpNewAccount';
import { useSignupContext } from '../../../context/SignupProvider';
import { useAuth } from '../../../context/AuthProvider';
const SignupBtn = () => {
  const {name, email, password, confirmPassword} = useSignupContext()
  const {switchPage} = useAuth()
  return (
    <TouchableOpacity style={styles.button} onPress={() => signUpNewAccount(name, email, password, confirmPassword, switchPage)}>
      <Text style={styles.buttonText}>Sign up</Text>
    </TouchableOpacity>
  )
}
export default SignupBtn;