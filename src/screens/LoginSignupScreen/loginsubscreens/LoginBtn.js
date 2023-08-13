//this file will make a login button component for the login screen
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { loginBtn as styles } from '../css';
import { useAuth } from '../../../context/AuthProvider';
import { useLoginContext } from '../../../context/LoginProvider';
import handleLogin from '../../../utils/handleLogin';
const LoginBtn = () => {
  const {loggingIn} = useAuth()
  const {email,password} = useLoginContext()
  return (
    <TouchableOpacity style={styles.button} onPress={() => handleLogin(loggingIn, email, password)}>
      <Text style={styles.buttonText}>Log in</Text>
    </TouchableOpacity>
  )
}
export default LoginBtn;